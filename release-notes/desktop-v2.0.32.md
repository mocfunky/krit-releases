# Krit Desktop 2.0.32

Published July 24, 2026.

## What changed

- Added hybrid local game-activity detection: alongside the existing curated
  title list, Krit now recognizes already-installed Steam, Epic (via Heroic
  on Linux), GOG, Microsoft Store, and Battle.net games — entirely on-device,
  with no launcher account connection required for any of it.
- You can manually identify a running game Krit doesn't recognize from
  Settings > Privacy & Activity; a match always requires confirmation against
  Krit's game database before it's remembered.
- Detection stays local and opt-in, exactly as in earlier releases: only a
  single recognized game's name and stable ID ever leave the device, never a
  process list or file path.
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
