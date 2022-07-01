import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


const Todo = () => {
    const [taskitems, setTaskItems] = useState([]);
    useEffect(() => {
      fetch("https://vast-mesa-79038.herokuapp.com/task")
        .then((res) => res.json())
        .then((data) => setTaskItems(data));
    }, []);
    const reverse = [...taskitems].reverse();
  
    const handleCompelete = (task) => {
      const items = {
        complet: task,
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
          
        });
    };

      // Update Single Data 
const navigate = useNavigate();
const navigateToDetails = (id) => {
  navigate(`/update/${id}`);
};
    return (
        <div>
            <h1 className='text-3xl font-bold font-mono text-center mt-20 mb-20'>To-Do List</h1>
            {reverse.map((item) => (
        <div className="card mt-10 bg-base-100 shadow-xl md:w-6/12 md:mx-auto mb-20">
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
                onClick={() => navigateToDetails()}
                className="btn btn-sm hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-gray-600 bg-gray-600 text-white ml-2 rounded"
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

export default Todo;