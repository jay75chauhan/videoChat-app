import StartMeeting from "../components/StartMeeting";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import { View } from "react-native";
import { io } from "socket.io-client";

let socket;

export default function MeetingRoom() {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUser, setActiveUser] = useState();

  useEffect(() => {
    socket = io("http://9012-43-251-222-219.ngrok.io");
    socket.on("connection", () => console.log("connection"));
    socket.on("all-users", (users) => {
      console.log("Active users");
      setActiveUser(users);
    });
  }, []);

  const joinRoom = () => {
    socket.emit("join-room", { roomId: roomId, userName: name });
    console.log("start metting");
  };

  return (
    <View style={[tw`  h-full`, { backgroundColor: "#1c1c1c" }]}>
      <StartMeeting
        name={name}
        setRoomId={setRoomId}
        setName={setName}
        roomId={roomId}
        joinRoom={joinRoom}
      />
    </View>
  );
}
