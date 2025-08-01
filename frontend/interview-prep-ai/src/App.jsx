import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LandingPage from './pages/LandingPage';
import DashBoard from './pages/Home/Dashboard';
import InterViewprep from './pages/InterviewPrep/InterViewprep';
import UserProvider from "./context/userContext";

const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
              {/* {default route} */}
              <Route path='/' element={<LandingPage />} />

            <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/interview-prep/:sessionId' element={<InterViewprep />} />
          </Routes>
        </Router>

        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "13px",
            },
          }}
        />

      </div>
    </UserProvider>
  )
}

export default App
