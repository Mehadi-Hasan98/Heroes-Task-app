import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateTasks = () => {
  const { id } = useParams();

  const [update, setUpdate] = useState([]);
  useEffect(() => {
    const url = `https://vast-mesa-79038.herokuapp.com/task/${id}`;
     fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdate(data));
  }, [id]);

  console.log(update);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const task = event.target.task.value;

    const updatedUser = { task };

    // send data to the server
    const url =`https://vast-mesa-79038.herokuapp.com/task/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        toast("tasks updated successfully!!!");
        event.target.reset();
      });
  };
  console.log(update);
  return (
    <div className="hero mt-28 mb-16">
      <div className="hero-content text-center font-mono">
        <div className="max-w-md">
          <h2 className="text-2xl my-10 font-semibold">Update Your Task</h2>
          <form
            onSubmit={handleUpdateUser}
            className="bg-base-100 shadow-xl px-10 py-10 rounded-1"
          >
            <input
              type="text"
              name="task"
              className="w-80 rounded border-2 text-xl text-pink-600 border-pink-600 input input-bordered mb-5 py-4 pr-4"
              placeholder={update.task}
            />
            <br />
            <input
              type="submit"
              className="btn hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 bg-pink-600 text-white ml-2 rounded"
              value="Update Task"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTasks;