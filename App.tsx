import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import FilterTabs from "./components/FilterTabs";
import { Task } from "./types/task";
import { loadTasks, saveTasks } from "./storage/taskStorage";
import { v4 as uuidv4 } from "uuid";

type Filter = "all" | "active" | "completed";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    loadTasks().then(setTasks);
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 40 }}>
      <TaskInput onAdd={addTask} />

      <FilterTabs current={filter} onChange={setFilter} />

      {filteredTasks.length === 0 && (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          No tasks found
        </Text>
      )}

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleTask} />
        )}
      />
    </View>
  );
}