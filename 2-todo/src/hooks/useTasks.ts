import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import { delay } from "../helpers/utils";
import { TASKS_KEY, type Task } from "../models/task";

function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoadingTask, setIsLoadingTask] = useState<boolean>(true);

  async function fetchTasks() {
    if (isLoadingTask) {
      await delay(1000);
      setIsLoadingTask(false);
    }
    setTasks(tasksData);
  }

  useEffect(() => {
    fetchTasks();
  }, [tasksData]);

  return {
    tasks,
    tasksCount: tasks.filter(
      (task: Task) => !task.state || task.state === "created",
    ).length,
    completedTasksCount: tasks.filter((task: Task) => task.completed).length,
    isLoadingTask,
  };
}

export default useTasks;
