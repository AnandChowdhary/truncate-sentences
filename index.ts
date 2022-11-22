import natural from "natural";
const SentenceTokenizer = new natural.SentenceTokenizer();

export default (
  text: string,
  limit = 300,
  ellipsisCharacter = "…" // or "..."
) => {
  // One space after punctuation
  text = text.replace(/([.?!])\s*(?=[A-Z])/g, "$1 ");

  const tokens = SentenceTokenizer.tokenize(text);

  // If the text is short enough, return it as is
  if (text.length < limit) return text;

  // Calculate recommended length taking sentences into consideration
  let length = 0;
  for (const token of tokens) {
    if (length + token.length <= limit) {
      length += token.length + 1;
    } else break;
  }

  // If first sentence is longer than limit, return ellipsis
  if (length === 0)
    return `${text.substring(0, limit).trim()}${ellipsisCharacter}`.replaceAll(
      `.${ellipsisCharacter}`,
      ellipsisCharacter
    );

  return text.substring(0, length).trim();
};
