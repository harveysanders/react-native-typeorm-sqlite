import { getRepository } from 'typeorm';
import { Todo } from '../entities/todo';

export const saveTodo = async (todo: Omit<Todo, 'id'>) => {
  const repository = getRepository(Todo);
  const saved = await repository.save(todo);
  return saved;
};
