# kontoh_educational_complex
Website for Kontoh educational complex

## Images and captions

- Website image copies live in `public/images/web/` and use descriptive WebP filenames.
- Captions, alternative text, gallery categories, and school-level image selections live in `src/data/school.js`.
- New full-resolution originals are preserved locally in `.image-originals/`. This folder is ignored by Git and is not included in deployments; share originals separately when needed.
- JHS currently uses campus photographs until a suitable pupil photograph is available. The JHS catering group belongs in the gallery, not the JHS slideshow.
- The image beside the headteacher message is a campus photograph, not a staff portrait.

Make image and content updates on a feature branch, push that branch, and open a pull request for collaborator review before merging into `main`.

- Removed AI-enhanced photos are preserved locally in `ai-image-archive/`, with original paths and file hashes in its manifest. This folder is ignored by Git and excluded from deployment. Back it up separately; GitHub will not contain it. See `docs/IMAGE_AUDIT.md` for source mappings.
