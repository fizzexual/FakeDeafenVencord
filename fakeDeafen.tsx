/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ApplicationCommandInputType, sendBotMessage } from "@api/Commands";
import { definePluginSettings } from "@api/Settings";
import definePlugin, { OptionType } from "@utils/types";
import { findStoreLazy } from "@webpack";

const GatewayConnectionStore = findStoreLazy("GatewayConnectionStore");

export let fakeD = false;

/** The last real voice state Discord passed to the gateway's voiceStateUpdate (captured by the patch). */
let lastVoiceState: Record<string, any> | null = null;

const settings = definePluginSettings({
    mute: {
        type: OptionType.BOOLEAN,
        description: "Appear muted to others while fake deafened",
        default: true
    },
    deafen: {
        type: OptionType.BOOLEAN,
        description: "Appear deafened to others while fake deafened",
        default: true
    }
});

/**
 * Re-sends the last real voice state through the (patched) gateway method, so the
 * server immediately receives the fake or real values. Returns false if not in voice.
 */
function resendVoiceState(): boolean {
    if (lastVoiceState?.channelId == null) return false;

    const socket = GatewayConnectionStore?.getSocket?.();
    if (typeof socket?.voiceStateUpdate !== "function") return false;

    socket.voiceStateUpdate({ ...lastVoiceState });
    return true;
}

export default definePlugin({
    name: "FakeDeafen",
    description: "Appear deafened to others while still being able to hear them. Use /fd to toggle",
    authors: [{ name: "fizzexual", id: 0n }],

    settings,

    patches: [
        {
            // Gateway socket class:
            // voiceStateUpdate(e){let{...selfMute:i=!1,selfDeaf:r=!1,...}=e,c={guild_id:t,channel_id:n,self_mute:i,self_deaf:r,...};...this.send(VOICE_STATE_UPDATE,c)}
            find: "}voiceStateUpdate(",
            replacement: [
                {
                    // Remember the real state so /fd can resend it without touching the UI.
                    match: /voiceStateUpdate\((\i)\)\{/,
                    replace: "voiceStateUpdate($1){$self.remember($1);"
                },
                {
                    // Override what actually goes out to the server.
                    match: /self_mute:(\i),self_deaf:(\i),/,
                    replace: "self_mute:$self.toggle($1,'mute'),self_deaf:$self.toggle($2,'deaf'),"
                }
            ]
        }
    ],

    commands: [
        {
            name: "fd",
            description: "Toggle fake deafen",
            inputType: ApplicationCommandInputType.BUILT_IN,
            execute: (_, ctx) => {
                fakeD = !fakeD;
                const sent = resendVoiceState();

                sendBotMessage(ctx.channel.id, {
                    content: (fakeD ? "🔴 Fake deafen: ON" : "⚪ Fake deafen: OFF")
                        + (sent ? "" : "\n-# Not in a voice channel right now. It will apply when you join one.")
                });
            }
        }
    ],

    remember(state: Record<string, any>) {
        lastVoiceState = state;
    },

    toggle(real: boolean, what: "mute" | "deaf"): boolean {
        if (!fakeD) return real;
        switch (what) {
            case "mute": return settings.store.mute || real;
            case "deaf": return settings.store.deafen || real;
        }
    },

    stop() {
        // Plugin disabled: make sure the server sees the real state again.
        if (!fakeD) return;
        fakeD = false;
        resendVoiceState();
    }
});
