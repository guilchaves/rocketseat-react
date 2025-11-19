import Button from "../../ui/Button";
import PlusIcon from "../../../assets/icons/plus.svg?react";
import TaskItem from "../TaskItem";
import useTasks from "../../../hooks/useTasks";
import useTask from "../../../hooks/useTask";
import type { Task } from "../../../models/task";

function TaskList() {
  const { tasks, isLoadingTask } = useTasks();
  const { createNewTask } = useTask();

  function handleNewTask() {
    createNewTask();
  }

  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          className="w-full"
          onClick={handleNewTask}
          disabled={
            tasks.some((task) => task.state === "creating") || isLoadingTask
          }
        >
          Nova tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {!isLoadingTask &&
          tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        {isLoadingTask && (
          <>
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
          </>
        )}
      </section>
    </>
  );
}

export default TaskList;
