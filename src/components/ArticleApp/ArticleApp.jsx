import { List } from "./List";
import { SideBar } from "./SideBar";
import s from "./ArticleApp.module.css";
import { useEffect, useState } from "react";
import { data } from "../../assets/articles";
import { Favorites } from "./Favorites";
import { Modal } from "../Modal/Modal";
import { AddArticleForm } from "./AddArticleForm";
import { nanoid } from "nanoid";

export const ArticleApp = () => {
  const [articles, setArticles] = useState(
    () => JSON.parse(window.localStorage.getItem("articles")) || data
  );
  const [favorites, setFavorites] = useState(
    () => JSON.parse(window.localStorage.getItem("favorites")) || []
  );
  const [selectedTab, setSelectedTab] = useState(
    () => JSON.parse(window.localStorage.getItem("page")) || "home"
  );
  const [isOpen, setIsOpen] = useState(false);
  const [searchStr, setSearchStr] = useState("");
  const [sortType, setSortType] = useState("");
  // #region useEffect
  useEffect(() => {
    window.localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);
  useEffect(() => {
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  useEffect(() => {
    window.localStorage.setItem("page", JSON.stringify(selectedTab));
  }, [selectedTab]);
  // #endregion useEffect

  const handleDeleteArticle = (id) => {
    setArticles((prev) => prev.filter((item) => item.id !== id));
  };
  const handleAddToFavorites = (article) => {
    if (!favorites.includes(article)) {
      setFavorites((prev) => [...prev, article]);
    }
  };
  const handleDeleteFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleAddArticle = (data) => {
    const newArticle = { ...data, id: nanoid(), createdAt: Date.now() };
    setArticles((prev) => [...prev, newArticle]);
    closeModal();
  };
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchStr.trim().toLowerCase()) ||
      article.body.toLowerCase().includes(searchStr.trim().toLowerCase())
  );
  const sortedArcticles = () => {
    switch (sortType) {
      case "newest":
        return filteredArticles.sort((a, b) => a.createdAt - b.createdAt);
      case "oldest":
        return filteredArticles.sort((a, b) => b.createdAt - a.createdAt);
      case "a-z":
        return filteredArticles.sort((a, b) => a.title.localeCompare(b.title));
      case "z-a":
        return filteredArticles.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return filteredArticles;
    }
  };
  return (
    <div className={s.wrapperMain}>
      <SideBar setSelectedTab={setSelectedTab} openModal={openModal} />
      {selectedTab === "home" && (
        <List
          setSearchStr={setSearchStr}
          setSortType={setSortType}
          articles={sortedArcticles()}
          handleDeleteArticle={handleDeleteArticle}
          handleAddToFavorites={handleAddToFavorites}
        />
      )}
      {selectedTab === "fav" && (
        <Favorites
          favorites={favorites}
          handleDeleteArticle={handleDeleteFromFavorites}
        />
      )}
      {isOpen && (
        <Modal onClose={closeModal} title="Add article">
          <AddArticleForm handleAddArticle={handleAddArticle} />
        </Modal>
      )}
    </div>
  );
};
