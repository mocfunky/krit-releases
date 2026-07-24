# Krit public releases

This public repository is the official distribution and release-history home
for **Krit Beta**.

- Public site: `https://mocfunky.github.io/krit-releases/`
- Web app: `https://voice.krit.gg/`
- Project progress: `https://voice.krit.gg/progress`
- Current desktop release: `2.0.31`
- Current Android release: `1.1.5`
- Native GitHub history: 32 releases containing all 59 retained installer
  packages

The repository contains only packaged installers, public checksums, public
release notes, and the static GitHub Pages site. It intentionally does **not**
contain Krit application source code, infrastructure configuration, database
material, internal handoff notes, credentials, or secrets.

New installers should be attached to a GitHub Release rather than committed to
the repository. Update `release-history.json` and the static page from the same
verified release manifest so the version, dates, filenames, and checksums stay
in sync.

The native [GitHub Releases](https://github.com/mocfunky/krit-releases/releases)
page is the complete package archive. Each retained version includes its
original build date in the release notes, available installers, and SHA-256
checksums. Where detailed historical notes were not retained, the entry says so
instead of reconstructing unsupported claims.

## Linux quick install

```sh
curl -fsSL https://voice.krit.gg/install-linux.sh | sh
```

The command resolves the current release from Krit's published manifest,
selects DEB or RPM where supported, falls back to a per-user AppImage, and
verifies the published SHA-256 digest before installation.
