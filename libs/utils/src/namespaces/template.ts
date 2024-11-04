export const templatesList = [
  "template1",
  "template2",
  "template3",
] as const;

export type Template = (typeof templatesList)[number];
