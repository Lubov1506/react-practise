import { cutText } from "../../helpers/cutText";
import s from "./PostsApp.module.css";
export const Post = ({ item }) => {
  return (
    <li className={s.post}>
      <h3>{item.title}</h3>
      <p>{cutText(item.body)}</p>
    </li>
  );
};
