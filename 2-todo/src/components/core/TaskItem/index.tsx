import { useState } from "react";
import CheckIcon from "../../../assets/icons/check.svg?react";
import PencilIcon from "../../../assets/icons/pencil.svg?react";
import TrashIcon from "../../../assets/icons/trash.svg?react";
import XIcon from "../../../assets/icons/x.svg?react";
import ButtonIcon from "../../ui/ButtonIcon";
import Card from "../../ui/Card";
import InputCheckbox from "../../ui/InputCheckbox";
import Text from "../../ui/Text";
import InputText from "../../ui/InputText";

function TaskItem() {
  const [isEditing, setIsEditing] = useState(false);

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
          <InputCheckbox />
          <Text className="flex-1">🛒 Fazer compras da semana</Text>
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
