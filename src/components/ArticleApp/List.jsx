import { ArticleCard } from "./ArticleCard";
import s from "./ArticleApp.module.css";
import { SearchBar } from "./SearchBar";
import { Sort } from "./Sort";

export const List = ({
  articles,
  handleDeleteArticle,
  handleAddToFavorites,
  setSearchStr,setSortType
}) => {
  return (
    <div className={s.articles}>
      <h2>Articles page </h2>
      <div className={s.searchBar}>
        <SearchBar setSearchStr={setSearchStr} />
        <Sort setSortType={ setSortType} />
      </div>
      <ul className={s.list}>
        {articles.map((article) => {
          return (
            <ArticleCard
              key={article.id}
              item={article}
              handleDeleteArticle={handleDeleteArticle}
              handleAddToFavorites={handleAddToFavorites}
            />
          );
        })}
      </ul>
    </div>
  );
};
