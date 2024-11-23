import { Hit } from "../../types/searchTypes";
import { highlightText } from "../../utils/highlightHelper";

type ResultCardProps = {
  article: Hit;
  saveArticle: (article: Hit) => void;
};
export const ResultCard = ({ article, saveArticle }: ResultCardProps) => {
  const { title, story_title, points, author, num_comments } = article;

  const highlightedTitle = highlightText(
    article?._highlightResult?.title?.value
  );
  return (
    <div
      className="py-2 border-b px-4 gap-3 hover:bg-gray-100 hover:cursor-pointer"
      onClick={() => saveArticle(article)}
    >
      {highlightedTitle.length > 0 ? (
        <p
          className="text-md font-semibold"
          dangerouslySetInnerHTML={{
            __html: highlightedTitle,
          }}
        />
      ) : (
        <p className="text-md font-semibold">{title || story_title}</p>
      )}
      <div className="flex space-x-2 text-xs text-gray-500">
        <p>{points} points</p>
        <span>|</span>
        <p>by {author}</p>
        <span>|</span>
        <p>{num_comments} comments</p>
      </div>
    </div>
  );
};
