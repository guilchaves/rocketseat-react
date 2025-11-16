import useLocalStorage from "use-local-storage";
import { type Task, TASKS_KEY, TaskState } from "../models/task";
import { delay } from "../helpers/utils";
import { useState } from "react";

function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isUpdatingTask, setIsUpdatingTask] = useState(false);
  const [isDeletingTask, setIsDeletingTask] = useState(false);

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

  async function updateTask(id: string, payload: { title: Task["title"] }) {
    setIsUpdatingTask(true);
    await delay(600);
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, state: TaskState.Created, ...payload } : task,
    );
    setTasks(updatedTask);
    setIsUpdatingTask(false);
  }

  function updateTaskStatus(id: string, completed: boolean) {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, completed } : task,
    );
    setTasks(updatedTask);
  }

  async function deleteTask(id: string) {
    setIsDeletingTask(true);
    await delay(600);
    setTasks(tasks.filter((task) => task.id !== id));
    setIsDeletingTask(false);
  }

  return {
    createNewTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  };
}

export default useTask;
