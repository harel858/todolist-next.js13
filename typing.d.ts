export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

export type pagesProps = {
  params: { todoId: string };
};
