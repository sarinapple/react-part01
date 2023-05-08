import { useContext, useEffect, useState } from "react";
import "./customers.scss";
import { LoginContext } from "../../App";
// import { useLocation, useNavigate } from "react-router-dom";

const Customers = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [customers, setCustomers] = useState();
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show); // SETTING SHOW TO NOT FALSE
  };

  // const location = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {});

  return <div className="customers-container">Customers</div>;
};

export default Customers;
