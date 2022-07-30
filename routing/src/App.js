// import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
// import Search from "./Demo/Search";
// import List from "./Demo/List";
// import Home from "./Demo/Home";
// import Courses from "./Demo/Courses";

// function App() {
//   return (
//     <Router>
//       <Link to="/home">Home</Link>
//       <br></br>
//       <Link to="courses">Courses</Link>
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/courses" element={<Courses />}>
//           <Route path="search" element={<Search />} />
//           <Route path="list" element={<List />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }
// export default App;
//Routes are chosen based on the best match
//Route: Route is the conditionally its path matches the current URL.

import React from "react";
import Home from "./Redux/Home";

const App = () => {
  return <Home />;
};

export default App;
//Actions only describe what happened, not how the application's state changes.
//A reducer is a function that accepts the current state and action, and returns a new state with the action performed.
