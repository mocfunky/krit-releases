# Krit Desktop 2.0.38

Published July 26, 2026.

## What changed

- Comprehensively rebuilt the game-activity detector's exclusion list after
  a third false positive (`Microsoft.WidgetsPlatformRuntime`, following
  `ChxApp` and Office Hub in earlier releases). Rather than patch reactively
  again, the full set of non-game Windows apps was audited and classified:
  the list now covers many more Microsoft first-party utilities and common
  third-party gaming-PC vendor software (graphics, audio, and peripheral
  control panels), plus general pattern matching for locale packs, runtime
  components, and similar non-game package families. Real games such as the
  Solitaire Collection, Minecraft, and Sea of Thieves remain detectable.
- Fixed a bug where, in a narrow startup race, a second app instance could
  fail to defer to an already-running one and instead create its own
  competing window and tray icon — leaving Quit, Check for updates, and
  Refresh unresponsive if that stale instance was the one on screen.
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
