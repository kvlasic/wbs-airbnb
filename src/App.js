import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [lsdata, setLsdata] = useState([]);
  useEffect(() => {
    fetch("https://my-strapi-server-1.herokuapp.com/api/living-spaces")
      .then((res) => res.json())
      .then((res) => setLsdata(res.data));
  }, []);
  console.log(lsdata);
  return <div className="App"></div>;
}
export default App;
