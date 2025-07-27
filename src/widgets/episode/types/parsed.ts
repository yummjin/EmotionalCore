export type ParsedContent =
  | { type: 'text'; content: string }
  | { type: 'image'; url: string };
