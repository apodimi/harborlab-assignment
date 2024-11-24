## Project Structure

The project structure is as follows:

```
├── public/
├── src/
│   ├── api/
│   │   └── search.ts
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── ResultCard
│   │   ├── SavedArticleCard
│   │   ├── SearchInput
│   │   └── CircularLoader
│   ├── hooks/
│   │   └── useSearch.tsx
│   ├── pages
│   │   └── Search
│   │       ├── index.tsx
│   │       └── components
│   │           ├──ErrosMessage.tsx
│   │           └── NoResult.tsx
│   ├── reducers/
│   │   └── savedArticlesReducer.ts
│   ├── types/
│   │   └── searchTypes.ts
│   └── utils/
│       └── highlightHelper.ts
├── App.tsx
├── main.tsx
└── ...
```

### api folder

The API folder contains all the requests that can be performed by the application. For this specific project, the `search.ts` file is included, which handles search functionality.

### components folder

In the `components` folder, all the components that can be used in different parts of the application are included.

### hooks folder

The `hooks` folder contains all the hooks that will be used in the application. In this case, it includes the hooks for managing search functionality and returning various data.

### pages folder

The `pages` folder contains all the pages of our application. In this case, it includes the search page as well as any components needed by that specific page.

### reducers folder

The `reducers` folder contains the reducers used for state management, in this case, for the stored articles.

### types folder

The `types` folder contains all the TypeScript types needed within the application.

### utils folder

The `utils` folder contains functions that are useful for managing and formatting data.

## Installation

To install and run the project locally, follow these steps:

1. **Clone the repository:**

```sh
git clone https://github.com/apodimi/harborlab-assignment.git
cd harborlab-assignment
```

2. **Install dependencies:**

Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```sh
npm install
```

3. **Run the development server:**

```sh
npm run dev
```
