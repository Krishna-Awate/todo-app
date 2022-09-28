const Input = ({ handleChange, handleKeyUp, value }) => {
  return (
    <div className="col-sm-10">
      <input
        style={{ width: "300px", marginLeft: "100px" }}
        type="text"
        className="form-control"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        value={value}
      />
    </div>
  );
};

export default Input;
