import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Logout from "./pages/Logout.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import SalesManagerDashboard from "./pages/SalesManagerDashboard.jsx";
import SalesmanDashboard from "./pages/SalesmanDashboard.jsx";
import Leads from "./pages/Leads.jsx";
import Appointments from "./pages/Appointments.jsx";
import CsvUpload from "./pages/CsvUpload.jsx";
import Login from "./pages/Login.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
          <Route exact path="/sales-manager" element={<PrivateRoute><SalesManagerDashboard /></PrivateRoute>} />
          <Route exact path="/salesman" element={<PrivateRoute><SalesmanDashboard /></PrivateRoute>} />
          <Route exact path="/leads" element={<PrivateRoute><Leads /></PrivateRoute>} />
          <Route exact path="/appointments" element={<PrivateRoute><Appointments /></PrivateRoute>} />
          <Route exact path="/csv-upload" element={<PrivateRoute><CsvUpload /></PrivateRoute>} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;