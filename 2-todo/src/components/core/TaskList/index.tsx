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
        <Button icon={PlusIcon} className="w-full" onClick={handleNewTask}>
          Nova tarefa
        </Button>
      </section>
      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
}

export default TaskList;
