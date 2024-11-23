import { Hit } from "../../types/searchTypes";

type SavedArticleCardProps = {
  article: Hit;
  handleRemoveArticle: (article: Hit) => void;
};
export const SavedArticleCard = ({
  article,
  handleRemoveArticle,
}: SavedArticleCardProps) => {
  const { title, story_title, points, author, num_comments } = article;

  return (
    <div className="flex gap-8 border p-4 my-2">
      <div className="grow">
        <h2 className="font-semibold">{title || story_title}</h2>
        <div className="flex space-x-2 text-xs text-gray-500">
          <p>{points} points</p>
          <span>|</span>
          <p>by {author}</p>
          <span>|</span>
          <p>{num_comments} comments</p>
        </div>
      </div>

      <button
        onClick={() => handleRemoveArticle(article)}
        className="font-bold"
      >
        Remove
      </button>
    </div>
  );
};
