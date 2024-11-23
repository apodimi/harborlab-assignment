import DOMPurify from "dompurify";

export const highlightText = (text: string): string => {
  if (!text) return "";
  const replacedText = text
    .replace(/<em>/g, '<span class="bg-orange-400">')
    .replace(/<\/em>/g, "</span>");
  return DOMPurify.sanitize(replacedText);
};
