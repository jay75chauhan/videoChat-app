import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    customColor: "#FF751F",
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join",
  },
  {
    id: 3,
    name: "calendar",
    title: "Scheduler",
  },
  {
    id: 4,
    name: "upload",
    title: "Share Screen",
  },
];

export default function MenuButton({ navigation }) {
  return (
    <View style={tw`flex-row  justify-between mt-8`}>
      {items.map((item, index) => (
        <View key={index} style={tw`items-center flex-1 `}>
          <TouchableOpacity
            onPress={() => item.customColor && navigation.navigate("Room")}
            style={tw`h-14 w-14 rounded-xl items-center justify-center ${
              item.customColor ? `bg-yellow-500` : `bg-blue-500`
            }  `}
          >
            <FontAwesome name={item.name} size={25} color="#efefef" />
          </TouchableOpacity>
          <Text style={tw`text-gray-300 text-xs pt-2`}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}
