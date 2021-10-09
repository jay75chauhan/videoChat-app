import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "tailwind-react-native-classnames";
import Entypo from "react-native-vector-icons/Entypo";

export default function ChatHeader({ setModalVisible }) {
  return (
    <View style={tw`flex-row justify-between px-2 py-5 items-center`}>
      <Pressable onPress={() => setModalVisible(false)}>
        <Text
          style={tw`text-white text-2xl font-semibold  py-1 px-3 bg-gray-600 rounded-full`}
        >
          Close
        </Text>
      </Pressable>
      <Text
        style={tw`text-white text-2xl font-semibold py-1 px-3 bg-gray-600 rounded-full`}
      >
        Chat
      </Text>
      <Entypo name="bell" size={30} color="#efefef" style={tw`p-2 `} />
    </View>
  );
}
