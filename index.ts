import natural from "natural";
const SentenceTokenizer = new (natural as any).SentenceTokenizer() as natural.WordTokenizer;

export default (text: string, limit: number = 300) => {
  const tokens = SentenceTokenizer.tokenize(text);
  let result = "";
  let length = 0;
  for (const token of tokens) {
    if (length + token.length <= limit) {
      result += ` ${token}`;
      length += token.length;
    } else break;
  }
  return result || (text.length > limit ? `${text.substring(0, limit)}...` : text);
}
