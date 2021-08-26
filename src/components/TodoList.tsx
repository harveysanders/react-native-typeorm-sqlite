import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Todo } from '../entities/todo';

interface TodoListProps {
  todos: Todo[];
}
export const TodoList: React.FC<TodoListProps> = (props) => {
  const { todos } = props;
  return (
    <View>
      {todos.length === 0 && <Text>No to do task available</Text>}
      {todos.map((toDo, index) => (
        <View style={styles.listItem} key={`${index}_${toDo.desc}`}>
          <Text
            style={[
              styles.task,
              { textDecorationLine: toDo.completed ? 'line-through' : 'none' },
            ]}
          >
            {toDo.desc}
          </Text>
          <Button
            title={toDo.isComplete ? 'Completed' : 'Complete'}
            onPress={() => toggleComplete(index)}
          />
          <Button
            title="X"
            onPress={() => {
              removeItem(index);
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
