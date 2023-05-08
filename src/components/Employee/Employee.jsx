import React from "react";

const Employee = (props) => {
  return (
    <div>
      <h3>Here is an Employee {props.name}</h3>
      {/* PROPS OPTION 01 */}
      {/* <span>{props.role}</span> */}
      {/* PROPS OPTION 02 */}
      <p>{props.role ? props.role : "no role"}</p>
      {/* PROPS OPTION 03 */}
      {/* {props.role ? (
        <p class="role"> {props.role}</p>
      ) : (
        <p class="norole">No role</p>
      )} */}
      {/* CURLIES ARE NEEDED TO RENDER A VALUE */}
    </div>
  );
};

export default Employee;
