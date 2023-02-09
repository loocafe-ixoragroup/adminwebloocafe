import Cookies from "universal-cookie/cjs/Cookies";
import useWindowSize from "./hooks/useWindowSize";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  const [width, height] = useWindowSize();
  const cookies = new Cookies();
  const isLoggedIn = cookies.get("token") ? true : false;

  return <>{isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}</>;
}

export default App;
