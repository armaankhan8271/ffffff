import { Link } from "react-router-dom";
import BHeader from "./components/header";
import Fetch from "./pages/api";



export default function App() {
  return (
    <div>
      
      <BHeader/>
<Fetch/>

      <Link className="nav-link  active text-left   btn btn-info border border-dark" to="/">Home</Link> 
      <Link className="nav-link  active text-center  btn btn-light border border-dark" to="/YAbout">About</Link> 
        <Link className="nav-link  active text-right btn btn-dark text-white border border-dark" to="/Yhome">Contact</Link>
    </div>
  );
}

