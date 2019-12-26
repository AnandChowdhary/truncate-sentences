import natural from "natural";
const SentenceTokenizer = new (natural as any).SentenceTokenizer() as natural.WordTokenizer;

export default (text: string, limit = 300, forceEllipsis = false) => {
  const tokens = SentenceTokenizer.tokenize(text);
  let result = "";
  let length = 0;
  if (!forceEllipsis)
    for (const token of tokens) {
      if (length + token.length <= limit) {
        result += `${token} `;
        length += token.length;
      } else break;
    }
  return (
    result.trim() ||
    (text.length > limit ? `${text.substring(0, limit)}...` : text)
  );
};
