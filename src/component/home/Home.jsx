import React, { useState } from "react";
import Container from "@mui/material/Container";
import Category from "./category/Category";
import JobPost from "./category/jobPost/JobPost";
import MedicalJobs from "./category/Medicaljob/MedicalJobs";
// import UserLogin from "../header/UserLogin";
import AdvanceSearch from "./advanceSearch/AdvanceSearch";
import Slider from "./slider/Slider";

// import SearchPage from "../search/SearchPage";



import "./style.css";

const Home = () => {
  return (
    <>
      {/* <UserLogin /> */}
      <Slider />
      <AdvanceSearch />
      <Category />
      <JobPost />
      <MedicalJobs />     
   
    </>
  );
};
export default Home;
