import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Custom PRNG Random Generator',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'bluesign',
    socialMediaUrl: 'https://twitter.com/bluesign',
    avatarUrl: '/avatars/bluesign.jpg',
    isVerified: true
  },
  excerpt: 'Custom implementation of a PRNG contract that uses block height and hash to generate a random number.',
  metadata: {
    subjects: [SubjectsEnum.Cadence]
  },
  codeLink: 'https://run.ecdao.org?code=aW1wb3J0IFBSTkcgZnJvbSAweDkzNjE1ZDI1ZDE0ZmEzMzcKCnB1YiBmdW4gbWFpbihtaW46IFVJbnQyNTYsIG1heDogVUludDI1Nik6IFVJbnQyNTYgewogIC8vIGNyZWF0ZXMgYSBybmcgc2VlZGVkIGZyb20gYmxvY2toZWlnaHQgc2FsdGVkIHdpdGggaGFzaCBvZiBhIHJlc291cmNlIHV1aWQgKG9yIGFueSBVSW50NjQgdmFsdWUpCiAgLy8gY2FuIGJlIHVzZWQgdG8gZGVmaW5lIHRyYWl0cyBiYXNlZCBvbiBhIGZ1dHVyZSBibG9jayBoZWlnaHQgZXRjLiAgCiAgbGV0IGdlbmVyYXRvciA8LSBQUk5HLmNyZWF0ZUZyb20oYmxvY2tIZWlnaHQ6IGdldEN1cnJlbnRCbG9jaygpLmhlaWdodCwgdXVpZDogMTAwKQoKICAvLyBjYWxsIHRoZSByYW5nZSBmdW5jdGlvbiB0byBnaXZlIHlvdSBhbiBpbnRlZ2VyIGJldHdlZW4gbWluIGFuZCBtYXgKICBsZXQgYW5zd2VyOiBVSW50MjU2ID0gZ2VuZXJhdG9yLnJhbmdlKG1pbiwgbWF4KQoKICAvLyBkZXN0cm95IHRoZSBnZW5lcmF0b3IgcmVzb3VyY2UKICBkZXN0cm95IGdlbmVyYXRvcgoKICAvLyByZXR1cm4geW91ciBhbnN3ZXIKICByZXR1cm4gYW5zd2VyCn0K&network=mainnet&args=eyJtaW4iOjEsIm1heCI6MTAwfQ%3D%3D'
};
