# Photo comparison, 26 October 2026

Compared all 25 website gallery photos against Downloads/originals and the existing local source collection. Authenticity here means a match to the user-supplied original, not forensic verification. Replacements use only orientation correction, resizing and WebP compression. Enhanced versions are preserved locally in ai-image-archive/.

## Replaced with supplied originals

| Website filename | Source in Downloads/originals |
| --- | --- |
| campus-entrance.webp | 1.jfif |
| campus-courtyard.webp | IMG_0305 copy.jpg |
| school-building.webp | IMG_0312.jpg |
| school-assembly.webp | 2.jfif |
| school-group.webp | 3.jfif |
| school-community.webp | IMG_0454.jpg |
| pupils-together.webp | IMG_0427.jpg |
| choreography-performance.webp | _MG_2759.jpg |
| girls-club.webp | 5.jfif |
| jhs-catering-group.webp | 6.jfif |

Also replaced the unused public legacy copies g6.jpeg and g7.jpeg with the matching authentic campus images.

## Removed and archived at the owner's request

All six rejected photos were removed from public/images/web and gallery data: assembly-courtyard, pupils-courtyard, christmas-dance, career-kids, pupil-recitations and festive-celebration. Their enhanced source copies and all previously replaced enhanced website versions were consolidated in the local ai-image-archive/ folder (32 image files, including different formats of the same photos). The folder is ignored by Git and excluded from deployments. Its manifest.json records each original path, archive path and SHA-256 hash; each move was verified against its hash. Git ignore rules preserve local files but do not back them up to GitHub.

## Additional originals reviewed

The newly supplied WhatsApp files repeat existing original photographs. Ten files were byte-for-byte duplicates; the remaining WhatsApp copies also repeat the same scenes, usually at lower resolution. The supplied ZIP contains only exact duplicates of the loose WhatsApp files, verified by SHA-256. Downloads files were left intact. Use one website copy per photograph, preferring the full-resolution camera original.

Three previously unused authentic photographs now replace the removed gallery content, with captions and alternative text describing what is visible:

| Website filename | Source in Downloads/originals | Caption |
| --- | --- | --- |
| writing-practice.webp | IMG_0345.jpg | Writing practice with teacher support |
| classroom-lesson.webp | IMG_0350.jpg | Working through a lesson together |
| school-march.webp | IMG_0816 .jpg | Pupils taking part in a school march |

The primary-school slideshow now uses writing-practice, classroom-lesson and school-assembly. The gallery has 22 distinct photos. Original camera files for the three additions are also preserved locally in .image-originals/authentic/.

## Other photos

The remaining nine gallery photos do not show the same apparent generated scene alterations. Three match supplied Downloads originals: classroom-teaching, classroom-activity and early-years-learning. The other six have matching existing local source copies: early-years-classroom, career-costumes, helicopter-visit, group-outing, school-procession-banner and school-procession. This is not a claim that visual inspection can certify their provenance.

## Validation

Production build passed. All 22 image assets decode successfully and return HTTP 200. Gallery and primary slideshow entries have unique, valid image references. The gallery was checked in the browser with the new photos and captions. The development console reports an existing Vue transition warning caused by the gallery component root structure; that structure was not changed in this update.
