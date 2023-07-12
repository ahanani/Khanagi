import React, { useState } from "react";
import OpenMenu from "./OpenMenu";

function MobileMenu({
  setOptionOne,
  optionOne,
  setOptionTwo,
  optionTwo,
}) {
  const [spanContent, setSpanContent] = useState(true);

  const menuClickListener = () => {
    if (spanContent) {
      setSpanContent(false);
    } else {
      setSpanContent(true);
    }
  };

  const homeMenu = () => {
    setOptionOne(false);
    setOptionTwo(false)
  }

  return (
    <div>
      <div
        style={{
          height: "15vh",
          display: "grid",
          gridTemplateColumns: "5% 25% 40% 15% 10% 5%",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <h1
          style={{ gridColumn: "3", alignSelf: "center", textAlign: "center" }}
          onClick={homeMenu}
        >
          Khanagi
        </h1>
        <span
          className="material-symbols-outlined"
          style={{ gridColumn: "5", alignSelf: "center", textAlign: "center" }}
          onClick={menuClickListener}
        >
          {spanContent ? "menu" : "menu_open"}
        </span>
      </div>
      <div>
        {spanContent ? null : (
          <OpenMenu
            setSpanContent={setSpanContent}
            setOptionOne={setOptionOne}
            optionOne={optionOne}
            setOptionTwo={setOptionTwo}
            optionTwo={optionTwo}
          />
        )}
      </div>
    </div>
  );
}

export default MobileMenu;
