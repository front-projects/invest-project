import {
  HashRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

import Layout from "./pages/Layout";
import Loading from "./pages/Loading";
import Invest from "./pages/Invest";
import Partners from "./pages/Partners";
import Stats from "./pages/Stats";
import HowItWorks from "./pages/HowItWorks";

function App() {
  const FallbackNavigate = ({ to }) => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate(to);
    }, [to, navigate]);
    return null;
  };

  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
    // console.log(WebApp);
    if (WebApp.platform !== "weba") {
      WebApp.ready();
    } else {
      window.location.href = "https://telegram.org/";
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Loading />} />
        <Route path="/menu" element={<Layout />}>
          <Route index element={<FallbackNavigate to="/menu/invest" />} />
          <Route path="invest">
            <Route index element={<Invest />} />
            <Route path="how-it-works" element={<HowItWorks />} />
          </Route>
          <Route path="partners" element={<Partners />} />
          <Route path="stats" element={<Stats />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
