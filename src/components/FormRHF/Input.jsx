import { useId } from "react";
import s from "./FormRHF.module.css";

export const Input = ({ register, name, errors, type = "text" }) => {
  const id = useId();
  return (
    <label>
      <span>{name}</span>
      <input {...register(name)} className={s.input} type={type} id={id} />
      {errors[name] && <p className={s.error}>{errors[name].message}</p>}
    </label>
  );
};
