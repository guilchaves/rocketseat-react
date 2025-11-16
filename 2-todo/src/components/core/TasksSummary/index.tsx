import useTasks from "../../../hooks/useTasks";
import Badge from "../../ui/Badge";
import Text from "../../ui/Text";

function TasksSummary() {
  const { tasksCount, completedTasksCount } = useTasks();

  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Tarefas criadas
        </Text>
        <Badge variant="secondary">{tasksCount}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Concluídas
        </Text>
        <Badge variant="primary">
          {completedTasksCount} de {tasksCount}
        </Badge>
      </div>
    </>
  );
}

export default TasksSummary;
