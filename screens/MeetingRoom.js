import StartMeeting from "../components/StartMeeting";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import {
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Camera } from "expo-camera";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { io } from "socket.io-client";
import Chat from "../components/Chat";

const menuIcons = [
  {
    id: 1,
    name: "microphone",
    title: "Mute",
    color: "e",
  },
  {
    id: 2,
    name: "video-camera",
    title: "Stop Video",
  },
  {
    id: 3,
    name: "upload",
    title: "Share",
  },
  {
    id: 4,
    name: "group",
    title: "Participants",
  },
];

let socket;

export default function MeetingRoom() {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [activeUser, setActiveUser] = useState([]);
  const [startCamera, setStartCamera] = useState(false);

  const __startCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();

    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const joinRoom = () => {
    __startCamera();
    socket.emit("join-room", { roomId: roomId, userName: name });
    console.log("start metting");
  };

  useEffect(() => {
    socket = io("http://e236-43-251-222-228.ngrok.io");
    socket.on("connection", () => console.log("connection"));
    socket.on("all-users", (users) => {
      console.log("Active users");

      setActiveUser(users);
    });
  }, []);

  return (
    <SafeAreaView style={[tw`h-full`, { backgroundColor: "#1c1c1c" }]}>
      {startCamera ? (
        <SafeAreaView style={tw`flex-1 `}>
          {/* modal */}
          <Modal
            animation="slide"
            transparent={false}
            presentationStyle={"fullScreen"}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed!");
              setModalVisible(!modalVisible);
            }}
          >
            <Chat
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </Modal>
          <View
            style={tw`flex-1 rounded-xl flex-row flex-wrap justify-between `}
          >
            <Camera
              type={"front"}
              style={[
                tw` ${
                  activeUser.length != 1 && `absolute z-50 right-5 bottom-3`
                }`,
                {
                  width: activeUser.length <= 1 ? "100%" : 100,
                  height: activeUser.length <= 1 ? 600 : 140,
                },
              ]}
            ></Camera>
            {activeUser
              .filter((user) => user.userName != name)
              .map((user, index) => (
                <View
                  key={index}
                  style={[
                    tw`border-2 border-gray-500 rounded-2xl p-2 my-2 mx-1 h-1/3 w-44 ${
                      activeUser.length == 2 && `h-full w-11/12 ml-4 `
                    } ${activeUser.length == 3 && `h-64 w-96 my-5`}`,
                    ,
                  ]}
                >
                  <Text style={tw`text-white text-xl ml-3 mt-1`}>
                    {user.userName}
                  </Text>
                </View>
              ))}
          </View>

          <View
            style={tw`py-3  flex-row  justify-around  bg-gray-300  rounded-t-2xl`}
          >
            {menuIcons.map((menuIcon, index) => (
              <TouchableOpacity key={index} style={tw`items-center flex-1 `}>
                <FontAwesome name={menuIcon.name} size={24} color="black" />
                <Text style={tw`text-xs text-black mt-1`}>
                  {menuIcon.title}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={tw`items-center flex-1 `}
            >
              <FontAwesome name={"comment"} size={24} color="black" />
              <Text style={tw`text-xs text-black mt-1`}>Chat</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        <StartMeeting
          name={name}
          setRoomId={setRoomId}
          setName={setName}
          roomId={roomId}
          joinRoom={joinRoom}
          activeUser={activeUser}
        />
      )}
    </SafeAreaView>
  );
}
