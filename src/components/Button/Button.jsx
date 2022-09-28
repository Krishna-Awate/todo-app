import styles from "../Todo.module.css";

const Button = ({ handleClickBtn, btnText }) => {
  return (
    <>
      <div className={styles.button}>
        <button
          onClick={handleClickBtn}
          type="button "
          className="btn btn-primary my-2"
        >
          {btnText}
        </button>
      </div>
    </>
  );
};

export default Button;
