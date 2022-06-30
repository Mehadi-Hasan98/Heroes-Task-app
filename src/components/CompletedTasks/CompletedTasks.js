
import { useEffect, useState } from "react";

const CompletedTasks = () => {
  const [taskitems, setTaskItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/complete")
      .then((res) => res.json())
      .then((data) => setTaskItems(data));
  }, []);
  const reverse = [...taskitems].reverse();
  return (
    <div class="card mx-auto w-3/12 mt-40 font-mono bg-base-100 shadow-xl mb-20">
      {reverse.map((item) => (
        <div key={item._id} class="card bg-base-100 shadow-xl">
          <div class="card-body grid grid-cols-1 items-center">
            <div>
              <p>
                <span className="text-green-600 text-xl mb-10">&#10004;</span> {item.complete}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedTasks;