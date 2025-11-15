import { cx } from "class-variance-authority";
import { useState } from "react";
import CheckIcon from "../../../assets/icons/check.svg?react";
import PencilIcon from "../../../assets/icons/pencil.svg?react";
import TrashIcon from "../../../assets/icons/trash.svg?react";
import XIcon from "../../../assets/icons/x.svg?react";
import { TaskStatus, type Task } from "../../../models/task";
import ButtonIcon from "../../ui/ButtonIcon";
import Card from "../../ui/Card";
import InputCheckbox from "../../ui/InputCheckbox";
import InputText from "../../ui/InputText";
import Text from "../../ui/Text";

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task?.status === TaskStatus.Creating);

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <InputCheckbox
            value={task?.completed?.toString()}
            checked={task?.completed}
          />
          <Text className={cx("flex-1", { "line-through": task?.completed })}>
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </>
      ) : (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              variant="secondary"
              onClick={handleExitEditTask}
            />
            <ButtonIcon icon={CheckIcon} variant="primary" />
          </div>
        </>
      )}
    </Card>
  );
}

export default TaskItem;
