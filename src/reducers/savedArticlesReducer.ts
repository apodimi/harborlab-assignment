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

export const savedArticlesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SAVE_ARTICLE":
      return {
        savedArticles: [...state.savedArticles, action.payload],
      };
    case "REMOVE_ARTICLE":
      return {
        savedArticles: state.savedArticles.filter(
          (article) => article.story_id !== action.payload.story_id
        ),
      };
    default:
      return state;
  }
};
