import { useEffect, useState } from 'react';
import { getRepository } from 'typeorm';
import { Todo } from '../entities/todo';

export const saveTodo = async (todo: Omit<Todo, 'id'>) => {
  const repository = getRepository(Todo);
  const saved = await repository.save(todo);
  return saved;
};

export const getTodos = async () => {
  const repository = getRepository(Todo);
  const todos = await repository.find();
  return todos;
};

export const removeTodo = async (id: string) => {
  const repository = getRepository(Todo);
  const todo = await repository.delete(id);
  return todo;
};

export const useTodos = (query?: string) => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [todos, setTodos] = useState<Todo[] | null>(null);
  useEffect(() => {
    async function run() {
      setLoading(true);
      try {
        const res = await getTodos();
        setTodos(res);
      } catch (err) {
        setError(err);
      }
    }
    run();
  }, [query]);
  return { error, loading, todos };
};
