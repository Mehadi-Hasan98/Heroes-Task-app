import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  
        
  const { register, handleSubmit, reset } = useForm();

  //   Post a Task =============
  const onSubmitFrom = (data) => {
    fetch("https://vast-mesa-79038.herokuapp.com/task", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Your Task Succesfull Added");
      });
    reset();
  };
  // Get All Data =============

  const [taskitems, setTaskItems] = useState([]);
  useEffect(() => {
    fetch("https://vast-mesa-79038.herokuapp.com/task")
      .then((res) => res.json())
      .then((data) => setTaskItems(data));
  }, []);
  const reverse = [...taskitems].reverse();

  const handleCompelete = (task) => {
    const items = {
      complete: task,
    };
    fetch("https://vast-mesa-79038.herokuapp.com/complete", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(items),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Task Compelete");
      });
  };

  // Update Single Data 
const navigate = useNavigate();
const navigateToDetails = (id) => {
  navigate(`/update/${id}`);
};
  return (
    
    <div className="my-40 mt-60 font-mono">
      <h1 className="text-3xl font-bold font-mono mb-10 md:mx-auto text-center sm:ml-20">Add Your Daily Tasks</h1>
      <form
        onSubmit={handleSubmit(onSubmitFrom)}
        className="flex w-11/12 sm: mx-auto justify-center"
      >
        <input
          className="w-80 rounded border-2 text-xl text-rose-600 border-pink-600 input input-bordered mb-5 py-4"
          placeholder="Enter Your Task"
          type="text"
          {...register("task", { required: true })}
        />
        <input
          className="btn bg-rose-600 text-white ml-2 rounded sm:mr-10"
          type="Submit"
          value="Submit"
        />
      </form>
      {reverse.map((item) => (
        <div className="card mt-10 bg-base-100 shadow-xl md:w-6/12 md:mx-auto w-half">
          <div className="card-body grid grid-cols-3 items-center">
            <div>
              <input
                onClick={() => handleCompelete(item.task)}
                type="checkbox"
                name="terms"
                id="terms"
              />
            </div>
            <div>
              <p>{item.task}</p>
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={() => navigateToDetails(item._id)}
                className="btn hover:bg-transparent hover:text-emerald-600 hover:border-2 hover:border-emerald-600 bg-emerald-500 text-white ml-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;


