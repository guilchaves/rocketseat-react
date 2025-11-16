import { cx } from "class-variance-authority";
import { useState } from "react";
import CheckIcon from "../../../assets/icons/check.svg?react";
import PencilIcon from "../../../assets/icons/pencil.svg?react";
import TrashIcon from "../../../assets/icons/trash.svg?react";
import XIcon from "../../../assets/icons/x.svg?react";
import { TaskState, type Task } from "../../../models/task";
import ButtonIcon from "../../ui/ButtonIcon";
import Card from "../../ui/Card";
import InputCheckbox from "../../ui/InputCheckbox";
import InputText from "../../ui/InputText";
import Text from "../../ui/Text";
import useTask from "../../../hooks/useTask";
import Skeleton from "../../ui/Skeleton";

interface TaskItemProps {
  task: Task;
  loading?: boolean;
}

function TaskItem({ task, loading }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(
    task?.state === TaskState.Creating,
  );
  const [taskTitle, setTaskTitle] = useState(task.title || "");
  const {
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  } = useTask();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    if (task.state === TaskState.Creating) {
      deleteTask(task.id);
    }
    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  async function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  }

  function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    updateTaskStatus(task.id, checked);
  }

  async function handleDeleteTask() {
    await deleteTask(task.id);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task?.completed}
            onChange={handleChangeTaskStatus}
            loading={loading}
          />
          {!loading ? (
            <Text className={cx("flex-1", { "line-through": task?.completed })}>
              {task?.title}
            </Text>
          ) : (
            <Skeleton className=" flex-1 h-6" />
          )}
          <div className="flex gap-1">
            <ButtonIcon
              icon={TrashIcon}
              variant="tertiary"
              onClick={handleDeleteTask}
              loading={loading}
              handling={isDeletingTask}
            />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={handleSaveTask} className="flex items-center gap-4">
            <InputText
              value={taskTitle}
              className="flex-1"
              onChange={handleChangeTaskTitle}
              required
              autoFocus
            />
            <div className="flex gap-1">
              <ButtonIcon
                type="button"
                icon={XIcon}
                variant="secondary"
                onClick={handleExitEditTask}
              />
              <ButtonIcon
                type="submit"
                icon={CheckIcon}
                variant="primary"
                handling={isUpdatingTask}
              />
            </div>
          </form>
        </>
      )}
    </Card>
  );
}

export default TaskItem;
