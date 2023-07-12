function OpenMenu({
  setSpanContent,
  setOptionOne,
  optionOne,
  setOptionTwo,
  optionTwo,
}) {
  const contactHandler = () => {
    setSpanContent(true);
    setOptionTwo(false);
    setOptionOne(!optionOne);
  };

  const storyHandler = () => {
    setSpanContent(true);
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
          padding: "30px 5% 15px 5%",
        }}
        onClick={contactHandler}
      >
        Contact
      </span>
      <span style={{ padding: "15px 5% 30px 5%" }} onClick={storyHandler}>
        Our Story
      </span>
    </div>
  );
}

export default OpenMenu;
