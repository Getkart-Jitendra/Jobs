import React from "react";
import Home from "../src/component/home/Home"
import Navbar from "./component/header/Navbar";
import Footer from "./component/footer/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./component/about/About";
import JobPost from "./component/home/category/jobPost/JobPost";
import MedicalJobs from "./component/home/category/Medicaljob/MedicalJobs";
import Register from "./component/register/Register";
import SearchPage from "./component/search/SearchPage";
import Profile from "./component/signUp/Profile";
import ContactUs from "./component/contact/ContactUs";


function App() {
  return (
    <>
      <Navbar />
      <div style={{marginTop: "60px"}}>
      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/jobpost'} element={<JobPost />} />
        <Route path={'/searchpage'} element={<SearchPage />} />
        <Route path={'/medicaljob'} element={<MedicalJobs />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/signup'} element={<Profile />} />
        <Route path={'/contactus'} element={<ContactUs />} />
      </Routes>
      </div>
      <Footer />

    </>


  );
}

export default App;
