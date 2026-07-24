# Krit Desktop 2.0.31

Published July 19, 2026.

## What changed

- Native Windows minimize, maximize, and close controls now follow Krit's
  selected theme instead of leaving a mismatched dark strip.
- Preserves the expanded 66-title game detector and desktop unread badge from
  2.0.30.
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
