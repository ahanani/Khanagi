function OpenMenu({ setOptionOne, optionOne, setOptionTwo, optionTwo }) {
  const contactHandler = () => {
    setOptionTwo(false);
    setOptionOne(!optionOne);
  };

  const storyHandler = () => {
    setOptionOne(false);
    setOptionTwo(!optionTwo);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto auto",
        background: "black",
        color: "white",
      }}
    >
      <span
        style={{
          padding: "30px 25px 15px 25px",
        }}
        onClick={contactHandler}
      >
        Contact
      </span>
      <span style={{ padding: "15px 25px 30px 25px" }} onClick={storyHandler}>
        Our Story
      </span>
    </div>
  );
}

export default OpenMenu;
