function DesktopMenu({ setOptionOne, optionOne, setOptionTwo, optionTwo }) {
  const contactHandler = () => {
    setOptionTwo(false);
    setOptionOne(!optionOne);
  };

  const storyHandler = () => {
    setOptionOne(false);
    setOptionTwo(!optionTwo);
  };

  return (
    <div>
      <div
        style={{
          height: "15vh",
          display: "grid",
          gridTemplateColumns: "5% 70% 10% 10% 5%",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <h1 style={{ gridColumn: "2", alignSelf: "center" }}>Khanagi</h1>
        <p
          style={{ gridColumn: "3", alignSelf: "center", textAlign: "right" }}
          onClick={contactHandler}
        >
          Contact
        </p>
        <p
          style={{ gridColumn: "4", alignSelf: "center", textAlign: "right" }}
          onClick={storyHandler}
        >
          Our Story
        </p>
      </div>
    </div>
  );
}

export default DesktopMenu;
