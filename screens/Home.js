import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import ContactsMenu from "../components/ContactsMenu";
import Header from "../components/Header";
import MenuButton from "../components/MenuButton";
import SearchBar from "../components/SearchBar";

export default function Home({ navigation }) {
  return (
    <View style={[tw` p-5`, { backgroundColor: "#1c1c1c" }]}>
      <SafeAreaView style={tw`h-full`}>
        <Header />
        <SearchBar />
        <MenuButton navigation={navigation} />
        <ContactsMenu />
      </SafeAreaView>
    </View>
  );
}
