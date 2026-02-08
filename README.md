# 🎧 Fake Deafen

> Appear deafened in Discord voice channels while still hearing everyone

A lightweight Vencord plugin that lets you fake being deafened - you'll show as deafened to others, but you can still hear everything in the voice channel.

## ✨ Features

- 🔇 **Appear Deafened** - Others see you as deafened
- 👂 **Still Hear Everything** - Your audio stays active locally
- ⚡ **Quick Toggle** - Simple `/fd` command
- ⚙️ **Customizable** - Control mute behavior with settings
- 🪶 **Lightweight** - Minimal performance impact

## 📦 Installation

### Prerequisites

You need [Vencord](https://vencord.dev/) built from source. If you haven't done this yet:

```bash
# Clone Vencord
git clone https://github.com/Vendicated/Vencord
cd Vencord

# Install dependencies
pnpm install --frozen-lockfile
```

### Install Plugin

1. **Download the plugin file**
   ```bash
   # Download fakeDeafen.tsx from this repo
   ```

2. **Create userplugins folder** (if it doesn't exist)
   ```bash
   mkdir src/userplugins
   ```

3. **Copy plugin to userplugins**
   ```bash
   # Windows
   copy fakeDeafen.tsx Vencord\src\userplugins\
   
   # Linux/Mac
   cp fakeDeafen.tsx Vencord/src/userplugins/
   ```

4. **Build and inject Vencord**
   ```bash
   pnpm build
   pnpm inject
   ```

5. **Enable the plugin**
   - Restart Discord
   - Go to Settings → Vencord → Plugins
   - Find "FakeDeafen" and enable it

## 🚀 Usage

### Basic Usage

1. Join any voice channel
2. Type `/fd` in any text channel
3. Toggle fake deafen on/off

### Status Messages

- 🔴 **Fake deafen: ON** - You appear deafened but can hear
- ⚪ **Fake deafen: OFF** - Normal behavior

> **Note:** Only you can see these status messages

## ⚙️ Settings

Configure the plugin in **Settings → Vencord → Plugins → FakeDeafen**:

| Setting | Description | Default |
|---------|-------------|---------|
| **Keep mute state** | Maintain your mute status while fake deafened | ✅ Enabled |
| **Send deafen state** | Send deafen status to Discord servers | ✅ Enabled |

## 🔧 How It Works

The plugin patches Discord's `voiceStateUpdate` function:

1. **Server Side** - Sends deafen state to Discord (you appear deafened)
2. **Client Side** - Keeps your audio streams active (you can still hear)
3. **Result** - Others see you as deafened, but you hear everything

```
Normal Deafen:  Server ✅ Deafened | Client ✅ Deafened
Fake Deafen:    Server ✅ Deafened | Client ❌ Not Deafened
```

## 🐛 Troubleshooting

<details>
<summary><b>Plugin doesn't show up in Vencord settings</b></summary>

- Verify file is in `src/userplugins/` (not `src/plugins/`)
- Rebuild Vencord: `pnpm build`
- Restart Discord completely
- Check console for errors: `Ctrl+Shift+I`
</details>

<details>
<summary><b>/fd command doesn't work</b></summary>

- Make sure plugin is enabled in Vencord settings
- Try reloading Discord: `Ctrl+R`
- Check if you're in a voice channel
- Look for errors in console: `Ctrl+Shift+I`
</details>

<details>
<summary><b>Can't hear audio when fake deafened</b></summary>

- Toggle fake deafen off and back on
- Check Discord audio settings
- Rejoin the voice channel
- Verify your audio output device is working
</details>

<details>
<summary><b>Build errors</b></summary>

- Make sure you have Node.js and pnpm installed
- Run `pnpm install --frozen-lockfile` again
- Check for TypeScript errors in the plugin file
- Ensure Vencord is up to date: `git pull`
</details>

## ⚠️ Disclaimer

**Important:** This plugin modifies Discord's client behavior.

- ❌ Using client modifications may violate [Discord's Terms of Service](https://discord.com/terms)
- ⚠️ Your account could be suspended or banned
- 🎓 This project is for **educational purposes only**
- 🔒 Use at your own risk

**Not affiliated with Discord Inc. or Vencord.**

## 📝 License

GPL-3.0-or-later - See [LICENSE](LICENSE) file for details

## 🤝 Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest features
- 🔧 Submit pull requests
- ⭐ Star the repo if you find it useful

## 📚 Resources

- [Vencord Documentation](https://docs.vencord.dev/)
- [Vencord GitHub](https://github.com/Vendicated/Vencord)
- [Discord Developer Portal](https://discord.com/developers/docs)

---

<div align="center">

**Made with ❤️ for the Discord community**

[Report Bug](https://github.com/fizzexual/FakeDeafenVencord/issues) · [Request Feature](https://github.com/fizzexual/FakeDeafenVencord/issues)

</div>
