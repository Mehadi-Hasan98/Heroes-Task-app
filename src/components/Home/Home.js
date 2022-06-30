import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
const Home = () => {
  const { register, handleSubmit, reset } = useForm();
    const [tasks, setTasks] = useState([]);

    const onSubmitFrom = data => {
      const url = 'http://localhost:5000/';
      fetch(url, {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      
      .then(res=> res.json())
      .then(result => 
        console.log(result))
        reset();
  }

    useEffect( () => {
        fetch('')
        .then(res => res.json())
        .then(data => setTasks(data))
    }, [])

  return (
    <div>
      <h1 className="text-4xl text-center font-bold font-mono mt-20 mb-20">
        Home
      </h1>
      <form
          className="flex flex-col w-80 mx-auto mt-20 form"
          onSubmit={handleSubmit(onSubmitFrom)}
        >
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Description"
            type="text"
            {...register("description", { required: true })}
          />
           <input
            className="product-btn rounded bg-accent py-2 mb-16 text-white text-xl"
            type="Submit"
            value="Enter"
          />
       </form>
    </div>
  );
};

export default Home;
