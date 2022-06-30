import { useEffect, useState } from 'react';
const Todo = () => {
    const [taskitems, setTaskItems] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/task")
        .then((res) => res.json())
        .then((data) => setTaskItems(data));
    }, []);
    const reverse = [...taskitems].reverse();
  
    const handleCompelete = (task) => {
      const items = {
        complet: task,
      };
      fetch("http://localhost:5000/complete", {
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

    const handleUpdate = (task) => {

    }
    return (
        <div>
            <h1 className='text-3xl font-bold font-mono text-center mt-20 mb-20'>To-Do List</h1>
            {reverse.map((item) => (
        <div class="card mt-10 bg-base-100 shadow-xl w-6/12 mx-auto mb-20">
          <div class="card-body grid grid-cols-3 items-center">
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
            <div class="card-actions justify-end">
              <button
                onClick={() => handleUpdate()}
                class="btn btn-sm hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-gray-600 bg-gray-600 text-white ml-2 rounded"
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