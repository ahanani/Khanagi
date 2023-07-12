import { useMediaQuery } from "react-responsive";
import "./fonts/font.css";
import MobileView from "./components/MobileView";
import DesktopView from "./components/DesktopView";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div style={{ fontFamily: "Nova Cut, cursive" }}>
      {isDesktopOrLaptop && <DesktopView />}
      {isTabletOrMobile && <MobileView />}
    </div>
  );
}

export default App;
