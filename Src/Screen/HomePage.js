import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const chatData = [
  {
    id: "1",
    name: "John Doe",
    message: "Hey, how are you?",
    profileImage: require("../../assets/mansurolislam.jpeg"),
  },
  {
    id: "2",
    name: "Alice Smith",
    message: "Hello there!",
    profileImage: require("../../assets/mansurolislam.jpeg"),
  },
];

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CHAT APP</Text>
      </View>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => navigation.navigate("Chatting")}
          >
            <Image source={item.profileImage} style={styles.profileImage} />
            <View style={styles.chatContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: "#fff",
  //   },
  header: {
    backgroundColor: "#0084ff",
    padding: 16,
  },
  headerText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 15,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatContent: {
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {
    fontSize: 16,
    color: "gray",
  },
});
