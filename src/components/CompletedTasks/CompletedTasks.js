
import { useEffect, useState } from "react";

const CompletedTasks = () => {
  const [taskitems, setTaskItems] = useState([]);
  useEffect(() => {
    fetch("https://vast-mesa-79038.herokuapp.com/complete")
      .then((res) => res.json())
      .then((data) => setTaskItems(data));
  }, []);
  const reverse = [...taskitems].reverse();
  return (
    <div className="card md:w-6/12 md:mx-auto w-half mt-40 mb-20 font-mono bg-base-100 shadow-xl mb-20">
      {reverse.map((item) => (
        <div key={item._id} className="card bg-base-100 shadow-xl">
          <div className="card-body grid grid-cols-1 items-center">
            <div>
              <p>
                <span className="text-green-600 text-xl">&#10004;</span> {item.complete}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedTasks;