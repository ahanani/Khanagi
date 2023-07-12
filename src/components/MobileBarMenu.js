import React, { useState } from "react";
import OpenMenu from "./OpenMenu";

function MobileMenu({
  setBackgroundOp,
  setOptionOne,
  optionOne,
  setOptionTwo,
  optionTwo,
}) {
  const [spanContent, setSpanContent] = useState(true);

  const menuClickListener = () => {
    if (spanContent) {
      setSpanContent(false);
      setBackgroundOp("50%");
    } else {
      setSpanContent(true);
      setBackgroundOp("100%");
    }
  };

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
