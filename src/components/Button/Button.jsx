export const Button = (props) => {
  return <button {...props} className={props.className || "btn border"} />;
};
