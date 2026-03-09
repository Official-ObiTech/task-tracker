import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Task } from "../types/task";

interface Props {
  task: Task;
  onToggle: (id: string) => void;
}

export default function TaskItem({ task, onToggle }: Props) {
  return (
    <TouchableOpacity onPress={() => onToggle(task.id)}>
      <View
        style={{
          padding: 12,
          borderBottomWidth: 1,
        }}
      >
        <Text
          style={{
            textDecorationLine: task.completed ? "line-through" : "none",
          }}
        >
          {task.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}