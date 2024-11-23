import { useCallback, useEffect, useReducer, useState } from "react";
import { SearchInput } from "../../components/SearchInput";
import { useSearch } from "../../hooks/useSearch";
import { debounce } from "lodash";
import { CircularLoader } from "../../components/CircularLoader";
import { ResultCard } from "../../components/ResultCard/ResultCard";
import {
  SavedArticlesActionTypes,
  savedArticlesReducer,
} from "../../reducers/savedArticlesReducer";
import { Hit } from "../../types/searchTypes";
import { NoResult } from "./components/NoResult";
import { ErrorMessage } from "./components/ErrorMessage";
import { SavedArticleCard } from "../../components/SavedArticleCard";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  const [state, dispatch] = useReducer(savedArticlesReducer, {
    savedArticles: [],
  });

  const debouncedSetSearchTerm = useCallback(
    debounce((term: string) => {
      setDebouncedSearchTerm(term);
    }, 700),
    []
  );

  useEffect(() => {
    debouncedSetSearchTerm(searchTerm);
  }, [searchTerm, debouncedSetSearchTerm]);

  const handleSearchInput = (term: string) => {
    setSearchTerm(term);
  };

  const { data, isLoading, isError } = useSearch(debouncedSearchTerm);

  const handleSaveArticle = (article: Hit) => {
    dispatch({ type: SavedArticlesActionTypes.SAVE_ARTICLE, payload: article });
  };

  const handleRemoveArticle = (article: Hit) => {
    dispatch({
      type: SavedArticlesActionTypes.REMOVE_ARTICLE,
      payload: article,
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-4">
      <h2 className="text-xl font-semibold mb-2">Search</h2>
      <SearchInput value={searchTerm} onChange={handleSearchInput} />
      <div
        className="border max-h-80 overflow-scroll"
        hidden={!data && !isLoading && !isError}
      >
        {isLoading && <CircularLoader />}
        <ErrorMessage hidden={!isError} />
        {data && (
          <div>
            {data?.map((result, index) => (
              <ResultCard
                key={result.story_id + index}
                article={result}
                saveArticle={handleSaveArticle}
              />
            ))}
          </div>
        )}

        <NoResult hidden={isLoading && data && data.length > 0} />
      </div>
      <h2 className="text-xl font-semibold mb-2 pt-10">Saved Articles</h2>
      {state.savedArticles.map((article, index) => (
        <SavedArticleCard
          key={article.story_id + index}
          article={article}
          handleRemoveArticle={handleRemoveArticle}
        />
      ))}
    </div>
  );
};
