import EditEmpl from "../Modal/EditEmpl";

const Employee = (props) => {
  return (
    <div>
      {/* PADDING Y & X AXIS WIDTH SMALL MARGIN X AXIS BACKGROUND SPACE IS MARGIN Y TOP  */}
      <div className="min-w-[350px] max-w-[350px] m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          // object-cover rounded-full h-[100px] w-[100px] MAKES IMAGE CIRCULAR // OBJECT FIT COVER IMAGE
          className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={props.img}
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">{props.name}</p>
            <p className="text-slate-500 font-medium">{props.role}</p>
          </div>

          <EditEmpl
            id={props.id}
            name={props.name}
            role={props.role}
            updateEmpl={props.updateEmpl}
          />
        </div>
      </div>

      {/* <h3>Here is an Employee {props.name}</h3>
      {/* PROPS OPTION 01 */}
      {/* <span>{props.role}</span> */}
      {/* PROPS OPTION 02 */}
      {/* <p>{props.role ? props.role : "no role"}</p> */}
      {/* PROPS OPTION 03 */}
      {/* {props.role ? (
        <p className="role"> {props.role}</p>
      ) : (
        <p className="norole">No role</p>
      )} */}
      {/* CURLIES ARE NEEDED TO RENDER A VALUE */}
    </div>
  );
};

export default Employee;
