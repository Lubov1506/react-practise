import { useState } from "react";
import { Button } from "../Button/Button";
import s from "./ArticleApp.module.css";
export const AddArticleForm = ({ handleAddArticle }) => { 
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    
  const handleSubmit = () => {
    handleAddArticle({ title, body, author });
    };
    
  return (
    <div className={s.form}>
      <input
        className={s.input}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      <input
        className={s.input}
        type="text"
        onChange={(e) => setBody(e.target.value)}
        placeholder="Enter body"
      />
      <input
        className={s.input}
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Enter author"
      />
      <Button onClick={handleSubmit}>Add article</Button>
    </div>
  );
};
