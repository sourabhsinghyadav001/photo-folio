import "./styles/global.css";
import Router from "./components/Router";
import { useSelector } from "react-redux";

function App() {
  const page = useSelector((state) => state.router);
  console.log(page);
  return <Router page={page} />;
}

export default App;
