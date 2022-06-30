import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const Calender = () => {
  return (
    <div>
      <h1 className="text-3xl text-black-500 font-mono text-center mt-20 mb-20 font-bold">
        Calender
      </h1>
      <div className="card lg:card-side bg-base-100 shadow-xl justify-center w-9/12 mx-auto mt-20 mb-32">
      <DayPicker />
      </div>
      
    </div>
  );
};

export default Calender;
