# Krit Desktop 2.0.36

Published July 26, 2026.

## What changed

- Expanded the game-activity false-positive fix from 2.0.35: a running
  `Microsoft.MicrosoftOfficeHub` background tile was found reporting as
  "Playing." Added the standard set of Windows-bundled first-party apps
  (Office Hub, Bing Weather, Mail and Calendar, and others) to the
  exclusion list, while keeping real games such as the Solitaire
  Collection and Minecraft fully detectable.
- Windows installers are Authenticode-signed.
- Linux builds are available as AppImage, DEB, and RPM.

## Install

Linux users can select and verify the appropriate package automatically:

```sh
curl -fsSL https://voice.krit.gg/install-linux.sh | sh
```

SHA-256 values for every file are published in `release-history.json`.

Krit is in beta. Existing installations receive updates through Krit's normal
in-app update flow.
