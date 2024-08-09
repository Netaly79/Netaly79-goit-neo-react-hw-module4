import css from "./Error.module.css";

const Error = () => {
  return (
    <p className={css.message}>
      {" "}
      Internal server Error. Data can not be dowloaded. Sorry...
    </p>
  );
};

export default Error;
