import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import Entypo from "react-native-vector-icons/Entypo";

export default function Header() {
  return (
    <View style={tw`flex-row items-center mt-5 justify-between py-5 px-2`}>
      <Entypo name="notification" size={30} color="#efefef" />
      <Text style={tw`text-white text-2xl font-bold`}>Meet & Chat</Text>
      <Entypo name="new-message" size={30} color="#efefef" />
    </View>
  );
}
