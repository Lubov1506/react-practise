import { ArticleCard } from "./ArticleCard";
import s from './ArticleApp.module.css';

export const Favorites = ({ favorites, handleDeleteArticle }) => {
  return (
    <div className={s.articles}>
        <h2>Favorites articles</h2>
      <ul className={s.fav}>
        {favorites.map((item) => {
          return <ArticleCard key={item.id} item={item} handleDeleteArticle={handleDeleteArticle} type='fav' />;
        })}
      </ul>
    </div>
  );
};
