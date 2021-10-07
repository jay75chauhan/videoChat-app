import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import Fontisto from "react-native-vector-icons/Fontisto";
export default function SearchBar() {
  return (
    <View
      style={[
        tw`flex-row  items-center  px-3 py-2 rounded-xl mt-5`,
        { backgroundColor: "#333333" },
      ]}
    >
      <Fontisto name="search" size={20} color="#858585" />
      <Text style={tw`text-gray-400 text-xl ml-3`}>Search </Text>
    </View>
  );
}
