import { formatDistanceToNow } from "date-fns";
import eoLocale from "date-fns/locale/uk";
import { Button } from "../Button/Button";
import s from "./ArticleApp.module.css";
export const ArticleCard = ({ item, handleDeleteArticle , handleAddToFavorites, type}) => {
  return (
    <li className={s.article}>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      <span>
        {formatDistanceToNow(item.createdAt, {
          addSuffix: true,
          locale: eoLocale,
        })}
      </span>
      <span>{item.author}</span>
      <div>
       {type!=='fav' && <Button onClick={ ()=>handleAddToFavorites(item)}>Add to favorite</Button>}
        <Button onClick={() => handleDeleteArticle(item.id)}>Delete</Button>
      </div>
    </li>
  );
};
