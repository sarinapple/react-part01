import EditEmpl from "../Modal/EditEmpl";

const Employee = (props) => {
  return (
    <div>
      {/* PADDING Y & X AXIS WIDTH SMALL MARGIN X AXIS BACKGROUND SPACE IS MARGIN Y TOP  */}
      <div class=" m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          // object-cover rounded-full h-[100px] w-[100px] MAKES IMAGE CIRCULAR // OBJECT FIT COVER IMAGE
          class="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={props.img}
          alt="Woman's Face"
        />
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">{props.name}</p>
            <p class="text-slate-500 font-medium">{props.role}</p>
          </div>

          <EditEmpl />
        </div>
      </div>

      {/* <h3>Here is an Employee {props.name}</h3>
      {/* PROPS OPTION 01 */}
      {/* <span>{props.role}</span> */}
      {/* PROPS OPTION 02 */}
      {/* <p>{props.role ? props.role : "no role"}</p> */}
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
