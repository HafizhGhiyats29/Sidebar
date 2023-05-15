import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteLayer } from "./tasksSlice";

function LayerList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteLayer(id));
  };

  return (
    <div className="w-50">
      <header className="flex justify-between py-4">
        <h1>Tasks ({tasks.length})</h1>

        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm shadow-sm"
        >
          Create Task
        </Link>
      </header>

      <div className="grid gap-3">
        {tasks.map((task) => (
          <div className="bg-neutral-800 py-2 px-3 rounded-md" key={task.id}>
            <header className="flex">
              <h3 className="text-xs font-bold">{task.title}</h3>
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                >
                  delete
                </button>
              </div>
            </header>
            <p>{task.description}</p>
            <p className="text-xs text-slate-400">{task.id}</p>
            <p className="text-xs text-slate-400">{task.file && task.file.name}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default LayerList;
