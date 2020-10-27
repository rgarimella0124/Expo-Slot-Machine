import * as React from "react";
import { View, Text } from "react-native";
import SlotMachine from "./Slot";
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SlotMachine text={1234566} />
      <SlotMachine text="hello" range="abcdefghijklmnopqrstuvwxyz" />
    </View>
  );
}
