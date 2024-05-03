import s from "./ArticleApp.module.css";

export const InputField = ({ register, errors, name, placeholder }) => {
  return (
    <label>
      <input
        {...register(name)}
        className={s.input}
        type="text"
        placeholder={placeholder}
      />
      {errors[name] && <p className={s.errors}>{errors[name].message}</p>}
    </label>
  );
};
