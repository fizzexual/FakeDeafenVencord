# Fake Deafen - Vencord Plugin

A Vencord plugin that allows you to appear deafened to others while still being able to hear them.

## Features

- 🎧 Appear deafened to other users
- 👂 Continue hearing audio from voice channels
- ⚡ Simple `/fd` command to toggle
- ⚙️ Customizable settings for mute behavior

## Installation

### Prerequisites
- [Vencord](https://vencord.dev/) must be installed and built from source

### Steps

1. Clone the Vencord repository if you haven't already:
   ```bash
   git clone https://github.com/Vendicated/Vencord
   cd Vencord
   ```

2. Create the `userplugins` folder if it doesn't exist:
   ```bash
   mkdir src/userplugins
   ```

3. Download `fakeDeafen.tsx` and place it in `src/userplugins/`:
   ```bash
   # Windows
   copy fakeDeafen.tsx Vencord\src\userplugins\
   
   # Linux/Mac
   cp fakeDeafen.tsx Vencord/src/userplugins/
   ```

4. Install dependencies and build Vencord:
   ```bash
   pnpm install --frozen-lockfile
   pnpm build
   ```

5. Inject Vencord into Discord:
   ```bash
   pnpm inject
   ```

6. Restart Discord and enable the plugin in Settings > Vencord > Plugins

## Usage

1. Join a voice channel
2. Type `/fd` in any chat to toggle fake deafen
3. You'll see a confirmation message:
   - 🔴 Fake deafen: ON (you appear deafened but can still hear)
   - ⚪ Fake deafen: OFF (normal deafen behavior)

## Settings

Access plugin settings in Vencord Settings > Plugins > FakeDeafen:

- **Keep mute state when fake deafened**: Maintain your mute status while fake deafened (default: true)
- **Send deafen state to server**: Send deafen status to Discord servers (default: true)

## How It Works

The plugin patches Discord's `voiceStateUpdate` function to intercept deafen state changes:
1. When fake deafen is enabled, it sends the deafen state to Discord's servers
2. Your client appears deafened to others
3. Locally, your audio streams remain active so you can still hear

## Warning

⚠️ **Important Notice:**
- This plugin modifies Discord's client behavior
- Using client modifications may violate [Discord's Terms of Service](https://discord.com/terms)
- Use at your own risk
- This is for educational purposes only
- Your account could be banned for using modified clients

## Troubleshooting

**Plugin doesn't show up:**
- Make sure you placed the file in `src/userplugins/` (not `src/plugins/`)
- Rebuild Vencord with `pnpm build`
- Restart Discord

**Command doesn't work:**
- Ensure the plugin is enabled in Vencord settings
- Check the console (Ctrl+Shift+I) for errors
- Try reloading Discord (Ctrl+R)

**Can't hear audio:**
- Toggle fake deafen off and on again
- Check your audio output settings
- Rejoin the voice channel

## License

GPL-3.0-or-later - Use at your own risk

## Disclaimer

This project is not affiliated with Discord Inc. or Vencord. Use responsibly and be aware of the risks involved with client modifications.
