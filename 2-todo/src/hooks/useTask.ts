import useLocalStorage from "use-local-storage";
import { type Task, TASKS_KEY, TaskStatus } from "../models/task";

function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  function createNewTask() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "",
        status: TaskStatus.Creating,
      },
    ]);
  }

  return {
    createNewTask,
  };
}

export default useTask;
