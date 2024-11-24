import { Hit } from "../types/searchTypes";

interface State {
  savedArticles: Hit[];
}

export enum SavedArticlesActionTypes {
  SAVE_ARTICLE = "SAVE_ARTICLE",
  REMOVE_ARTICLE = "REMOVE_ARTICLE",
}

type Action =
  | { type: SavedArticlesActionTypes.SAVE_ARTICLE; payload: Hit }
  | { type: SavedArticlesActionTypes.REMOVE_ARTICLE; payload: Hit };

const initialSavedArticlesState: State = {
  savedArticles: JSON.parse(localStorage.getItem("savedArticles") || "[]"),
};

export const savedArticlesReducer = (
  state: State = initialSavedArticlesState,
  action: Action
): State => {
  switch (action.type) {
    case "SAVE_ARTICLE": {
      if (
        state.savedArticles.some(
          (article) => article.story_id === action.payload.story_id
        )
      ) {
        return state;
      }
      const newSavedArticleState = {
        savedArticles: [...state.savedArticles, action.payload],
      };
      localStorage.setItem(
        "savedArticles",
        JSON.stringify(newSavedArticleState.savedArticles)
      );

      return newSavedArticleState;
    }

    case "REMOVE_ARTICLE": {
      const updatedState = {
        savedArticles: state.savedArticles.filter(
          (article) => article.story_id !== action.payload.story_id
        ),
      };
      localStorage.setItem(
        "savedArticles",
        JSON.stringify(updatedState.savedArticles)
      );
      return updatedState;
    }
    default:
      return state;
  }
};
