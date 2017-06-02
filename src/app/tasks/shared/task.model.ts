export interface ITask {
  id: number;
  checked: boolean;
  name: string;
  description: string;
  due_date: Date;
  due_time: Date;
  category: {
    name: string;
  };
}

