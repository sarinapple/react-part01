import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { createContext, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Employees from "./components/Employees/Employees";
import Customers from "./components/Customers/Customers";
import Dictionary from "./components/Dictionary/Dictionary";
import Calender from "./components/Calender/Calender";
import Employee from "./components/Employee/Employee";

export const LoginContext = createContext();

function App() {
  // INSERT LOGIC TO COMPONENT
  console.log("we about to list employees");
  // const showEmployees = false;
  const showEmployees = true;

  const [role, setRole] = useState("dev");
  // USE STATE RULE #1:  NEVER ASSIGN VALUE TO VAR DIRECTLY ; ALWAYS GO THROUGH THE SET FUNC
  let role02 = "dev"; // VAR TO BE PASSED AS PROP

  const [loggedIn, setLoggedIn] = useState("logged in", true); // WILL BE ASSOCIATED WITH USER ACCESS TOKEN
  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
      <BrowserRouter>
        {/* {console.log("showing whats in App component return")} */}
        {showEmployees ? (
          <>
            <input
              type="text"
              onChange={(e) => {
                console.log(e.target.value);
                setRole(e.target.value);
              }}
            />
            {/* role="intern" */}
            <Employee name="Al" role={role} />
            {/* FOLLOWING PROP DOES NOT UPDATE */}
            <Employee name="Val" role02={role02} />
          </>
        ) : (
          <p> You can't see list employees</p>
        )}
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/dictionary" element={<Dictionary />}></Route>
          <Route path="/calender" element={<Calender />}></Route>
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
