import React from "react";
import { View, Button } from "react-native";

type Filter = "all" | "active" | "completed";

interface Props {
  current: Filter;
  onChange: (filter: Filter) => void;
}

export default function FilterTabs({ current, onChange }: Props) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <Button title="All" onPress={() => onChange("all")} />
      <Button title="Active" onPress={() => onChange("active")} />
      <Button title="Completed" onPress={() => onChange("completed")} />
    </View>
  );
}