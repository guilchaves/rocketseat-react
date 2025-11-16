import Button from "../../ui/Button";
import PlusIcon from "../../../assets/icons/plus.svg?react";
import TaskItem from "../TaskItem";
import useTasks from "../../../hooks/useTasks";
import useTask from "../../../hooks/useTask";

function TaskList() {
  const { tasks } = useTasks();
  const { createNewTask } = useTask();

  console.log("tasks:", tasks);

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
          disabled={tasks.some((task) => task.state === "creating")}
        >
          Nova tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </section>
    </>
  );
}

export default TaskList;
