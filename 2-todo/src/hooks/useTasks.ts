import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../models/task";

function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTasksCount: tasks.filter((task: Task) => task.completed).length,
  };
}

export default useTasks;
