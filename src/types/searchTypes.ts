// types/searchTypes.ts

export interface HighlightResult {
  matchLevel: string;
  matchedWords: string[];
  value: string;
  fullyHighlighted?: boolean;
}

export interface Hit {
  _highlightResult: {
    author: HighlightResult;
    title: HighlightResult;
    url: HighlightResult;
  };
  _tags: string[];
  author: string;
  children: number[];
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string;
  points: number;
  story_id: number;
  title: string;
  updated_at: string;
  url: string;
  story_title: string;
}

export interface SearchResult {
  exhaustive: {
    nbHits: boolean;
    typo: boolean;
  };
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  hits: Hit[];
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: {
    _request: {
      roundTrip: number;
    };
    fetch: {
      query: number;
      total: number;
    };
    total: number;
  };
  query: string;
  serverTimeMS: number;
}
