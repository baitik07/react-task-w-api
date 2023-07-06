import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AddBlog from "../pages/AddBlog";
import AboutUs from "../pages/AboutUs";
import Contacts from "../pages/Contacts";
import Favourite from "../pages/Favourite";

const MainRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/favorites" element={<Favourite />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
