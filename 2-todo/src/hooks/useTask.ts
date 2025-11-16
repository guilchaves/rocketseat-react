import useLocalStorage from "use-local-storage";
import { type Task, TASKS_KEY, TaskState } from "../models/task";

function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  function createNewTask() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "",
        state: TaskState.Creating,
      },
    ]);
  }

  function updateTask(id: string, payload: { title: Task["title"] }) {
    const updatedTask = tasks.map((task) =>
      task.id === id
        ? { ...task, state: TaskState.Created, ...payload }
        : task,
    );
    setTasks(updatedTask);
  }

  return {
    createNewTask,
    updateTask,
  };
}

export default useTask;
