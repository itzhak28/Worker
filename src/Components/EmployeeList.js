import { useEffect, useState, useContext } from "react";
import { AppContext } from "../Context/Context";
import axios from "axios";
import EmployeeItem from "./EmployeeItem";
import "../CSS/EmployeeList.css";

const EmployeeList = ({ company = null }) => {
  const [employees, setEmployees] = useState([]);
  const { favs } = useContext(AppContext);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (company) {
      const url = `https://randomuser.me/api/?results=10&seed=${company}`;
      axios
        .get(url)
        .then((response) => {
          setUrl("/employee?company=" + company + "&index=");
          setEmployees(response.data.results);
        })
        .catch(() => console.log("Can't fetch employees"));
    } else {
      setEmployees(favs);
      setUrl("/favourites/employee?index=");
    }
  }, [company, favs]);

  return (
    <div className="container">
      <h2>Search results for the company: {company}</h2>
      <div className="containerList">
        {employees.map((employee, index) => {
          return (
            <EmployeeItem
              key={employee.login.uuid}
              url={url + `${index}`}
              employee={employee}
            />
          );
        })}
      </div>
    </div>
  );
};
export default EmployeeList;
