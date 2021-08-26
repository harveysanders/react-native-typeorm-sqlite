import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Todo } from '../entities/todo';

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
  onToggleCompleted: (id: string) => void;
}
export const TodoList: React.FC<TodoListProps> = (props) => {
  const { todos, onDelete, onToggleCompleted } = props;

  return (
    <View>
      {todos.length === 0 && <Text>No to do task available</Text>}
      {todos.map((todo, index) => (
        <View style={styles.listItem} key={`${index}_${todo.desc}`}>
          <Text
            style={[
              styles.task,
              { textDecorationLine: todo.isComplete ? 'line-through' : 'none' },
            ]}
          >
            {todo.desc}
          </Text>
          <Button
            title={todo.isComplete ? 'Completed' : 'Complete'}
            onPress={() => onToggleCompleted(todo.id)}
          />
          <Button
            title="X"
            onPress={() => {
              onDelete(todo.id);
            }}
            color="crimson"
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  task: {
    width: 200,
  },
});
