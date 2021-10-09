import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, _View } from "react-native";
import tw from "tailwind-react-native-classnames";
export default function StartMeeting({
  name,
  setName,
  roomId,
  setRoomId,
  joinRoom,
}) {
  return (
    <View style={tw``}>
      <View
        style={[
          tw` rounded-xl mx-4 mt-10 p-4 `,
          { backgroundColor: "#373538" },
        ]}
      >
        <TextInput
          style={tw`text-xl text-white`}
          value={name}
          placeholder="Enter name"
          onChangeText={(text) => setName(text)}
          placeholderTextColor="#767476"
        />
      </View>
      <View
        style={[
          tw` rounded-xl mx-4 mt-5 p-4 bg-gray-500`,
          { backgroundColor: "#373538" },
        ]}
      >
        <TextInput
          style={tw`text-xl text-white`}
          value={roomId}
          keyboardType="numeric"
          placeholder="Enter ID"
          placeholderTextColor="#767476"
          onChangeText={(text) => setRoomId(text)}
        />
      </View>

      <TouchableOpacity
        onPress={() => roomId !== undefined && joinRoom()}
        style={tw`items-center mt-16 bg-blue-500 rounded-3xl py-3 mx-20`}
      >
        <Text style={tw`text-2xl text-white `}>Start Meeting</Text>
      </TouchableOpacity>
    </View>
  );
}
