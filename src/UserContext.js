import React, { useState } from "react";

let UserContext = React.createContext();

export default UserContext;

const UsersData = [
  {
    userName: "Brielle Williamson",
    position: "System Architect",
    office: "Edinburgh",
    age: 41,
    startDate: "2011-04-25",
    salary: "320800",
  },
  {
    userName: "Cara Stevens",
    position: "Accountant",
    office: "Tokyo",
    age: 38,
    startDate: "2020-05-23",
    salary: "170750",
  },
  {
    userName: "Gavin Cortez",
    position: "Web Developer",
    office: "Newyork",
    age: 32,
    startDate: "2019-05-02",
    salary: "426800",
  },
  {
    userName: "Doris Wilder",
    position: "UI Developer",
    office: "Sydney",
    age: 29,
    startDate: "2021-05-07",
    salary: "230500",
  },
  {
    userName: "Paul Byrd",
    position: "Software Engineer",
    office: "Singapore",
    age: 43,
    startDate: "2006-11-23",
    salary: "560500",
  },
];

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(UsersData);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
