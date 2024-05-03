import { Button } from "../Button/Button";
import s from "./ArticleApp.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { InputField } from "./InputField";

const schemaValidate = Yup.object().shape({
  title: Yup.string().min(3, 'Too short'),
  body: Yup.string().max(20, 'Too long!'),
  author: Yup.string().required('Required field')
})

export const AddArticleForm = ({ handleAddArticle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidate),
  });
  const onSubmit = (data) => {
    handleAddArticle(data);
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <InputField register={register} errors={errors} name='title' placeholder='Enter title' />
        <InputField register={register} errors={errors} name='body' placeholder='Enter body' />
        <InputField register={register} errors={errors} name='author' placeholder='Enter author' />
        
        <Button onClick={handleSubmit}>Add article</Button>
      </form>
    </div>
  );
};
