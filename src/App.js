import "./styles/global.css";
import Router from "./components/Router";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const page = useSelector((state) => state.router);
  return <Router page={page} />;
}

export default App;
