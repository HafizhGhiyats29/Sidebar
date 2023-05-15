import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import InputLayer from "../../components/InputFile";
import { editLayer } from "./tasksSlice";

function EditLayer() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    file:null,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editLayer({ ...task, id: params.id }));

    navigate("/");
  };

  const handleFileInput = (e) => {
    setTask((prevTask) => ({
      ...prevTask,
      file: e.target.files[0],
    }));
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params, tasks]);

  return (
    <div className="relative py-16 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-sky-200 px-8 py-6 rounded-lg shadow-md"
      >
        <div className="flex justify-between items-center mb-4">
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Task:</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={task.title}
            className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
            placeholder="Write a title"
            autoFocus
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Description:</label>
          <textarea
            type="text"
            name="description"
            onChange={handleChange}
            value={task.description}
            className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
            placeholder="Write a description"
          />
        </div>
        <InputLayer fileInputType={handleFileInput}/>
      </form>
    </div>
  );
}

export default EditLayer;
