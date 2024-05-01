import { Button } from "../Button/Button";
import s from "./ArticleApp.module.css";
export const SideBar = ({ setSelectedTab, openModal }) => {
  return (
    <aside className={s.sidebar}>
      <h3>ArticleApp</h3>
      <nav>
        <Button onClick={() => setSelectedTab("home")}>Home</Button>
        <Button onClick={() => setSelectedTab("fav")}>Favorites</Button>
        <Button onClick={openModal}>Add article</Button>
      </nav>
    </aside>
  );
};
