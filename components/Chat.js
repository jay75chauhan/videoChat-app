import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import ChatHeader from "./ChatHeader";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Chat({ setModalVisible }) {
  const [messageText, setMessageText] = useState();

  return (
    <View style={{ flex: 1, backgroundColor: "#1c1c1c" }}>
      <SafeAreaView style={tw`h-full `}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ChatHeader setModalVisible={setModalVisible} />

          <View style={tw`flex-1`}></View>
          {/* type message */}
          <View style={tw` py-4 px-2`}>
            <Text style={tw`text-white ml-3 text-xl`}>Send to: Everyone</Text>
            <View style={tw`  flex-row items-center justify-between mt-2  `}>
              <TextInput
                style={tw`h-12 ml-2 p-2 px-3 text-lg w-10/12 mr-2 rounded-2xl text-white border border-gray-400 `}
                placeholder="Tap here to chat"
                placeholderTextColor="#595859"
                value={messageText}
                onChangeText={(text) => setMessageText(text)}
              />

              <TouchableOpacity>
                <FontAwesome
                  name={"send"}
                  size={20}
                  color="#efefef"
                  style={tw`p-3 bg-gray-500 ${
                    messageText && `bg-blue-500`
                  } rounded-xl`}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
}
