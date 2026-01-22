import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";
import SideBar from "./SideBar";
import SidebarSkeleton from "./SidebarSkeleton";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const location = useLocation();

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data.data ?? res.data));
    } catch (err) {
      if (err.response?.status === 401) {
        dispatch(addUser(null));
        navigate("/login");
      }
      console.error("Error fetching user:", err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const showSidebar = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
      <NavBar />

      <main className="flex grow overflow-hidden">
        {showSidebar && (
          <aside className="hidden lg:block w-72 bg-base-200 border-r border-base-300">
            {userData ? <SideBar /> : <SidebarSkeleton />}
          </aside>
        )}
        <section className="flex-1 overflow-y-auto">
          <Outlet />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Body;