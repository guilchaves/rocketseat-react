export const TASKS_KEY = "tasks";

export enum TaskStatus {
  Creating = "creating",
  Created = "created",
}

export interface Task {
  id: string;
  title: string;
  completed?: boolean;
  status?: TaskStatus;
}
