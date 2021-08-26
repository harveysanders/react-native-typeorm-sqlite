// https://github.com/amanshharma/React-Native-ToDoApp-using-Typscript-and-Hooks/blob/master/App.tsx

import 'reflect-metadata';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useDatabase } from '../database/hooks';
import { Todo } from './entities/todo';
import { removeTodo, saveTodo, useTodos } from './models/todo';
import { TodoList } from './components/TodoList';
import { CreateButton } from './components/CreateItem';

interface IToDo {
  text: string;
  completed: boolean;
}

export default function App() {
  useDatabase();
  // Hack to trigger useEffect
  const [forceUpdate, refresh] = useState<number>(0);
  const [value, setValue] = useState<string>('');

  const { todos: toDoList } = useTodos(forceUpdate.toString());
  const [error, showError] = useState<Boolean>(false);

  const handleSubmit = async (): Promise<void> => {
    if (value.trim()) {
      const todo: Omit<Todo, 'id'> = { desc: value, isComplete: false };
      await saveTodo(todo);
      refresh(Math.random());
      setValue('');
    } else {
      showError(true);
    }
  };

  const handleDelete = async (id: string) => {
    await removeTodo(id);
    refresh(Math.random());
  };

  const handleToggleCompleted = async (_id: string) => {
    refresh(Math.random());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Enter your todo task..."
          value={value}
          onChangeText={(e) => {
            setValue(e);
            showError(false);
          }}
          style={styles.inputBox}
        />
        <Button title="Add Task" onPress={handleSubmit} />
      </View>
      {error && (
        <Text style={styles.error}>Error: Input field is empty...</Text>
      )}
      <Text style={styles.subtitle}>Your Tasks :</Text>

      {toDoList ? (
        <TodoList
          todos={toDoList}
          onDelete={handleDelete}
          onToggleCompleted={handleToggleCompleted}
        />
      ) : null}

      <CreateButton type={'Location'} />
      <CreateButton type={'Contact'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    alignItems: 'center',
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputBox: {
    width: 200,
    borderColor: 'purple',
    borderRadius: 8,
    borderWidth: 2,
    paddingLeft: 8,
  },
  title: {
    fontSize: 40,
    marginBottom: 40,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: 'purple',
  },
  addButton: {
    alignItems: 'flex-end',
  },
  error: {
    color: 'red',
  },
});
