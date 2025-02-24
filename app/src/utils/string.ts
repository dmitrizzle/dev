export const generateTagIdFromText = (text: string): string => {
  if (typeof text === "string")
    return text
      .toLowerCase()
      .replace(/[ ]+/g, "-")
      .replace(/[^a-z0-9-]+/gi, "");

      // just because we specified that we want text with TypeScript, doesn't mean other stuff can't be passed here
      // for example, the Markdown component may send JSX this way
  return Math.random().toString(36).substring(7);
};
