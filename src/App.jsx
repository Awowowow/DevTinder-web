import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections"
import Requests from "./components/Requests";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import RefundPolicy from "./components/RefundPolicy";
import CookiePolicy from "./components/CookiePolicy";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Chat from "./components/Chat";


function App() {
  return (
    <>
    <Provider store = {appStore}>
      <BrowserRouter basename="/">
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<Body />} >
            <Route path ="/" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path= "/requests" element = {<Requests />} />
            <Route path= "/connections" element = {<Connections />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
            <Route path = "/chat/:toUserId" element={<Chat />} />
          </Route>
          </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
