interface ITodo {
  task: string;
  isDone: boolean;
  id: string;
}

type AddFn = (task: string) => Promise<void>;
