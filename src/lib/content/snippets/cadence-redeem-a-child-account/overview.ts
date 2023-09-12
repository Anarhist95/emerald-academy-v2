import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Account Linking - Publish a Child Account',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Jacob Tucker',
    socialMediaUrl: 'https://twitter.com/jacobmtucker',
    avatarUrl: 'https://avatars.githubusercontent.com/u/15198786?v=4',
    isVerified: true,
    walletAddress: '0x99bd48c8036e2876'
  },
  excerpt: 'Takes the account which should be the child of another account and publishes it for the parent to redeem.',
  metadata: {
    subjects: [SubjectsEnum.Cadence]
  },
  codeLink: 'https://run.ecdao.org/?code=aW1wb3J0IEh5YnJpZEN1c3RvZHkgZnJvbSAweGQ4YTdlMDVhN2FjNjcwYzAKCmltcG9ydCBDYXBhYmlsaXR5RmFjdG9yeSBmcm9tIDB4ZDhhN2UwNWE3YWM2NzBjMAppbXBvcnQgQ2FwYWJpbGl0eUZpbHRlciBmcm9tIDB4ZDhhN2UwNWE3YWM2NzBjMAoKdHJhbnNhY3Rpb24ocGFyZW50OiBBZGRyZXNzLCBmYWN0b3J5QWRkcmVzczogQWRkcmVzcywgZmlsdGVyQWRkcmVzczogQWRkcmVzcykgewogICAgcHJlcGFyZShhY2N0OiBBdXRoQWNjb3VudCkgewogICAgICAgIGxldCBjaGlsZCA9IGFjY3QuYm9ycm93PCZIeWJyaWRDdXN0b2R5Lk93bmVkQWNjb3VudD4oZnJvbTogSHlicmlkQ3VzdG9keS5Pd25lZEFjY291bnRTdG9yYWdlUGF0aCkKICAgICAgICAgICAgPz8gcGFuaWMoImNoaWxkIGFjY291bnQgbm90IGZvdW5kIikKCiAgICAgICAgbGV0IGZhY3RvcnkgPSBnZXRBY2NvdW50KGZhY3RvcnlBZGRyZXNzKS5nZXRDYXBhYmlsaXR5PCZDYXBhYmlsaXR5RmFjdG9yeS5NYW5hZ2Vye0NhcGFiaWxpdHlGYWN0b3J5LkdldHRlcn0%2BKENhcGFiaWxpdHlGYWN0b3J5LlB1YmxpY1BhdGgpCiAgICAgICAgYXNzZXJ0KGZhY3RvcnkuY2hlY2soKSwgbWVzc2FnZTogImZhY3RvcnkgYWRkcmVzcyBpcyBub3QgY29uZmlndXJlZCBwcm9wZXJseSIpCgogICAgICAgIGxldCBmaWx0ZXIgPSBnZXRBY2NvdW50KGZpbHRlckFkZHJlc3MpLmdldENhcGFiaWxpdHk8JntDYXBhYmlsaXR5RmlsdGVyLkZpbHRlcn0%2BKENhcGFiaWxpdHlGaWx0ZXIuUHVibGljUGF0aCkKICAgICAgICBhc3NlcnQoZmlsdGVyLmNoZWNrKCksIG1lc3NhZ2U6ICJjYXBhYmlsaXR5IGZpbHRlciBpcyBub3QgY29uZmlndXJlZCBwcm9wZXJseSIpCgogICAgICAgIGNoaWxkLnB1Ymxpc2hUb1BhcmVudChwYXJlbnRBZGRyZXNzOiBwYXJlbnQsIGZhY3Rvcnk6IGZhY3RvcnksIGZpbHRlcjogZmlsdGVyKQogICAgfQp9&network=mainnet&args=eyJwYXJlbnQiOiIweDEiLCJmYWN0b3J5QWRkcmVzcyI6IjB4WW91ckNhcGFiaWxpdHlGYWN0b3J5QWRkcmVzcyIsImZpbHRlckFkZHJlc3MiOiIweFlvdXJDYXBhYmlsaXR5RmlsdGVyQWRkcmVzcyJ9'
};
