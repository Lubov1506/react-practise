import { useForm } from "react-hook-form";
import s from "./FormRHF.module.css";
import { Input } from "./Input";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const valSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  surname: Yup.string().required("Required surname"),
});

export const FormRHF = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(valSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };
  const fields = [
    { name: "username", type: "text" },
    { name: "surname", type: "text" },
    { name: "email", type: "email" },
    { name: "password", type: "password" },
  ];
  return (
    <div className={s.form_wrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item) => (
          <Input
            key={item.name}
            register={register}
            errors={errors}
            name={item.name}
            type={item.type}
          />
        ))}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
