import React, { useContext, useEffect, useState } from "react";
import "../CSS/EmployeeItem.css";
import { AppContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

const EmployeeItem = ({ employee, url }) => {
  const [isFav, setIsFav] = useState(false);
  const { favs, setFavs } = useContext(AppContext);
  const navigateTo = useNavigate();

  useEffect(() => {
    favs.forEach((fav) => {
      if (fav.id.value === employee.id.value) {
        setIsFav(true);
      }
    });
  }, [employee, favs]);

  const handleFavClick = () => {
    if (isFav) {
      const newFavs = favs.filter((e) => e.id.value !== employee.id.value);
      setFavs(newFavs);
    } else {
      const newFavs = [...favs, employee];
      setFavs(newFavs);
    }
    setIsFav(!isFav);
  };
  const moreInfo = () => {
    return navigateTo(url);
  };

  return (
    <div className="employee-card">
      <div>
        <div className="image-container">
          {employee.picture ? (
            <img
              src={employee.picture.large}
              alt={employee.name.first || "Employee"}
              className="employee-image"
            />
          ) : (
            <div className="placeholder-image">No Image</div>
          )}
        </div>
        <div className="info-container">
          <h5 className="employee-name">
            {employee.name.first + " " + employee.name.last || "Unknown"}
          </h5>
          <p className="employee-detail">age: {employee.dob.age || "N/A"}</p>
          <p className="employee-detail">
            country: {employee.location.country || "N/A"}
          </p>
          <button className="more-info-btn" onClick={moreInfo}>
            more info{" "}
          </button>
        </div>
        <span
          onClick={handleFavClick}
          className={`star-icon ${isFav ? "yellow" : "white"}`}
        >
          <span className="fa fa-star"></span>
        </span>
      </div>
    </div>
  );
};

export default EmployeeItem;
