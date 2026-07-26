# Krit Desktop 2.0.35

Published July 26, 2026.

## What changed

- Fixed a game-activity false positive: a running Windows system component
  (`Microsoft.Windows.Apprep.ChxApp`, part of a SmartScreen reputation
  check) could be reported as a game the user was "Playing." Local game
  discovery now filters out Windows OS system components and known Xbox
  infrastructure before matching against installed games.
- Added diagnostics to the system tray icon: main-process errors are now
  logged to a dedicated `main.log`, and tray creation retries automatically
  if the OS shell isn't ready yet at startup.
- The offline Windows installer is now the default/primary download instead
  of the small online installer, after confirming via live signature checks
  that the online installer's SmartScreen warning reflects a heuristic bias
  against small bootstrapper-style executables, not a signing defect.
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
