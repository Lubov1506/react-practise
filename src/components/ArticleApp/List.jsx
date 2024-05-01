import { ArticleCard } from "./ArticleCard";
import s from "./ArticleApp.module.css";
import { SearchBar } from "./SearchBar";

export const List = ({
  articles,
  handleDeleteArticle,
  handleAddToFavorites,
  setSearchStr,
}) => {
  return (
    <div className={s.articles}>
      <h2>Articles page </h2>
      <SearchBar setSearchStr={setSearchStr} />
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
