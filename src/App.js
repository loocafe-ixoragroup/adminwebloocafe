import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import useWindowSize from "./hooks/useWindowSize";
import Layout from "./layout/Layout";
import { Dashboard, KYC, AddSupervisor, Trackrentals, UserDetails } from "./pages";

function App() {
  const [width, height] = useWindowSize();

  return (
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/add-supervisor" element={<AddSupervisor/>}/>
        <Route path="/track-rentals" element={<Trackrentals/>}/>
        <Route path="/user-details" element={<UserDetails/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
