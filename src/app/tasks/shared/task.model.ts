export interface ITask {
  id: number;
  checked: boolean;
  name: string;
  description: string;
  dueDate: Date;
  dueTime: Date;
  category: {
    name: string;
  };
}

