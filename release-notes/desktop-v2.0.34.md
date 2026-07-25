# Krit Desktop 2.0.34

Published July 25, 2026.

## What changed

- Fixed a startup freeze: on launch, local game-activity detection could
  block the entire app — the window, its rendering, and even the tray icon —
  for a minute or more on machines with many installed Windows Store apps.
  A discovery step was making one blocking system call per installed package
  instead of a non-blocking one. It's now fully asynchronous and never
  blocks startup, regardless of how many packages are installed.
- Windows installers are Authenticode-signed.
- Linux builds are available as AppImage, DEB, and RPM.
- The small Windows web installer downloads the full signed package.

## Install

Linux users can select and verify the appropriate package automatically:

```sh
curl -fsSL https://voice.krit.gg/install-linux.sh | sh
```

SHA-256 values for every file are published in `release-history.json`.

Krit is in beta. Existing installations receive updates through Krit's normal
in-app update flow.
