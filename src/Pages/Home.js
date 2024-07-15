import EmployeeList from "../Components/EmployeeList";
import SearchBar from "../Components/SearchBar";
import "../CSS/Home.css";
import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Home = () => {
  const handsImage = "/images/hands.jpg";
  const [searchParams] = useSearchParams();
  const [company, setCompany] = useState("google");

  useEffect(() => {
    const companySearchWord = searchParams.get("company");
    if (companySearchWord) {
      setCompany(companySearchWord);
    }
  }, [searchParams]);

  return (
    <div>
      <div className="homeContainer">
        <img src={handsImage} className="homeElement" alt="hands" width="500" />
        <SearchBar className="homeElement" />
        <EmployeeList className="homeElement" company={company} />
      </div>
    </div>
  );
};
export default Home;
