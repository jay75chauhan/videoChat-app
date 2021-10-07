import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  _View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
export default function MeetingRoom() {
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");

  return (
    <View style={[tw` h-full `, { backgroundColor: "#1c1c1c" }]}>
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
            onChange={(text) => setName(text)}
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
            placeholder="Enter name"
            placeholderTextColor="#767476"
            onChange={(text) => setRoomId(text)}
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {}}
            style={tw`items-center mt-16 bg-blue-500 rounded-3xl py-3 mx-20`}
          >
            <Text style={tw`text-2xl text-white `}>Start Meeting</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
