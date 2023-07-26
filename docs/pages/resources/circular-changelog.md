---
meta:
  title: Circular Changelog
  description: Changes to each version of the Circular project are documented here.
---

# Changelog

O-LIBRARY-NAME-O follows [Semantic Versioning](https://semver.org/). Breaking changes in components with the <o-badge variant="primary" pill>Stable</o-badge> badge will not be accepted until the next major version. As such, all contributions must consider the project's roadmap and take this into consideration. Features that are deemed no longer necessary will be deprecated but not removed.

Components with the <o-badge variant="neutral" style="--o-color-neutral-600: var(--o-color-accent-600)" pill>Beta</o-badge> or <o-badge variant="warning" pill>Experimental</o-badge> are release candidates, they could lack of some tests or the docs could be improved, however, the development is considered done and major changes are not expected.

Components with the <o-badge variant="danger" pill>wip</o-badge> badge should not be used in production. They are made available for test purposes. Major changes could be expected.

New versions of O-LIBRARY-NAME-O are released as-needed and generally occur when a critical mass of changes have accumulated. At any time, you can see what's coming in the next release by visiting [O-LIBRARY-NAME-O Next](O-DOCS-NEXT-WEBSITE-O).

## 1.5.0

- Adds `o-connected` and `o-disconnected` events
- **alert:** Adds open-toast property
- Renames all from Shoelace to the O-LIBRARY-NAME-O expected way (e.g. `<sl-alert>` to `<o-alert>`, `SlAlert` to `OAlert`)
