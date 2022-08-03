// import Navbar from "./Components/Navbar";
// import Shop from "./Components/Shop";
import { createContext } from "react";
import ComA from "./Contex/ComA";
// import ComB from "./Contex/ComB";
// import ComC from "./Contex/ComC";

const FirstName = createContext;
const LastName = createContext;
function App() {
  return (
    <div>
      <FirstName.Provider value={"Mansi"}>
        <LastName.Provider value={"Akbari"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;
export { FirstName };
export { LastName };
