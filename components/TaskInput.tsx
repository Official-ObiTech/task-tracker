import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

interface Props {
  onAdd: (title: string) => void;
}

export default function TaskInput({ onAdd }: Props) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) {
      Alert.alert("Task cannot be empty");
      return;
    }

    onAdd(text);
    setText("");
  };

  return (
    <View style={{ flexDirection: "row", marginBottom: 10 }}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="New task..."
        style={{
          flex: 1,
          borderWidth: 1,
          padding: 10,
          marginRight: 10,
        }}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}