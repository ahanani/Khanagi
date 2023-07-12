import { useState } from "react";
import MobileBarMenu from "./MobileBarMenu";
import Menu from "./Menu";
import RequestForm from "./RequestForm";

function MobileView() {
  const [backgroundOp, setBackgroundOp] = useState("100%");
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(false);

  const options = () => {
    if (optionOne) {
      return <h1>Contact</h1>;
    }

    if (optionTwo) {
      return <h1>Story</h1>;
    }
  };

  return (
    <div id="main-container">
      <MobileBarMenu
        setOptionOne={setOptionOne}
        optionOne={optionOne}
        setOptionTwo={setOptionTwo}
        optionTwo={optionTwo}
        setBackgroundOp={setBackgroundOp}
      />
      {optionOne || optionTwo ? (
        options()
      ) : (
        <div style={{opacity: backgroundOp}}>
          <Menu
            title={"Siders"}
            images={[1, 2, 3, 4, 5]}
            names={[
              "Afghan Turshi",
              "Chatni",
              "Fresh Nan",
              "Fresh Paraki",
              "Bolani",
            ]}
            prices={[9.99, 4.99, 2.99, 3.99, 9.99]}
            descriptions={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
            ]}
          />
          <Menu
            title={"Desserts"}
            images={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
            names={[
              "Afghan Kolcha",
              "Afghan Kolcha",
              "Kake",
              "Kolcha",
              "Bazam Kolcha",
              "Bazam Kolcha",
              "Kake",
              "Kaké Paner",
              "Machem ke chis",
              "Sambosa",
              "Bazam Kolcha",
              "Bazam Kolcha",
              "Rot",
              "Dega rot",
              "Dega kolcha",
              "Dega Kake",
            ]}
            prices={[
              9.99, 4.99, 2.99, 3.99, 9.99, 9.99, 4.99, 2.99, 3.99, 9.99, 9.99,
              4.99, 2.99, 3.99, 9.99, 2.99,
            ]}
            descriptions={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing.",
            ]}
          />
          <RequestForm />
        </div>
      )}
    </div>
  );
}

export default MobileView;
