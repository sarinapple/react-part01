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
import { v4 as uuidv4 } from "uuid";
import AddEmpl from "./components/AddEmpl/AddEmpl";

export const LoginContext = createContext();

function App() {
  // INSERT LOGIC TO COMPONENT
  console.log("we about to list employees");
  // const showEmployees = false;
  const showEmployees = true;

  const [role, setRole] = useState("dev");
  // USE STATE RULE #1:  NEVER ASSIGN VALUE TO VAR DIRECTLY ; ALWAYS GO THROUGH THE SET FUNC
  let role02 = "dev"; // VAR TO BE PASSED AS PROP

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Al",
      role: "dev",
      img: "https://images.pexels.com/photos/4588071/pexels-photo-4588071.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "val",
      role: "manager",
      img: "https://images.pexels.com/photos/2647053/pexels-photo-2647053.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      id: 3,
      name: "pal",
      role: "damager",
      img: "https://images.pexels.com/photos/2540644/pexels-photo-2540644.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "pal02",
      role: "flannerl-wearer",
      img: "https://images.pexels.com/photos/568020/pexels-photo-568020.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      name: "pal03",
      role: "driver",
      img: "https://images.pexels.com/photos/2152399/pexels-photo-2152399.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      name: "pal04",
      role: "tank",
      img: "https://images.pexels.com/photos/1526410/pexels-photo-1526410.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      name: "Al05",
      role: "dev02",
      img: "https://images.pexels.com/photos/16623469/pexels-photo-16623469.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ]);

  // HOW TO DESCRIBE THIS CALL BACK FUNCTOIN & MAKE IT MAKE SENSE WHEY THIS IS THE WAY WE NEED TO ACCESS FROM PARENT TO CHILD?
  function updateEmpl(id, upName, upRole) {
    console.log("up empl in app js");

    const updatedEmpls = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: upName, role: upRole };
      }
      return employee;
    });
    setEmployees(updatedEmpls);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const [loggedIn, setLoggedIn] = useState("logged in", true); // WILL BE ASSOCIATED WITH USER ACCESS TOKEN

  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
      <BrowserRouter>
        {/* {console.log("showing whats in App component return")} */}
        {showEmployees ? (
          // bg-red-200
          <div className="App ">
            <Header />
            <input
              type="text"
              onChange={(e) => {
                console.log(e.target.value);
                setRole(e.target.value);
              }}
            />

            <br />
            <hr />
            <br />

            <div className="flex flex-wrap justify-center">
              {employees.map((employee) => {
                console.log(employee);
                return (
                  <Employee
                    // key={uuidv4()}
                    key={employee.id}
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                    updateEmpl={updateEmpl}
                  />
                );
              })}
              {/* role="intern" */}
              {/* <Employee
                name="Al"
                role={role}
                img="https://images.pexels.com/photos/4588071/pexels-photo-4588071.jpeg?auto=compress&cs=tinysrgb&w=400"
              />
          
              <Employee
                name="Val"
                role02={role02}
                img="https://images.pexels.com/photos/2647053/pexels-photo-2647053.jpeg?auto=compress&cs=tinysrgb&w=100"
              />
              <Employee
                name="pal"
                role={role}
                img="https://images.pexels.com/photos/2540644/pexels-photo-2540644.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <Employee
                name="pal"
                role={role}
                img="https://images.pexels.com/photos/568020/pexels-photo-568020.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <Employee
                name="pal"
                role={role}
                img="https://images.pexels.com/photos/2152399/pexels-photo-2152399.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <Employee
                name="pal"
                role={role}
                img="https://images.pexels.com/photos/1526410/pexels-photo-1526410.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <Employee
                name="pal"
                role={role}
                img="https://images.pexels.com/photos/16623469/pexels-photo-16623469.jpeg?auto=compress&cs=tinysrgb&w=400"
              /> */}
            </div>
            {/* newEmployee={newEmployee}  */}
            <AddEmpl newEmployee={newEmployee} />
          </div>
        ) : (
          <p> You can't see list employees</p>
        )}

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
