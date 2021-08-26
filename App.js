import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import image from "./assets/andy.png";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Andy Castillo</Text>
      <Image
        // source={{
        //   uri: "https://picsum.photos/200",
        // }}
        source={image}
        style={styles.image}
      />
      {/* <Button color="black" title="Press me" onPress={() => Alert.alert("Hello World!")} /> */}
      <TouchableOpacity
        onPress={() => Alert.alert("Hello World!")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
  },
  title: { fontSize: 30, color: "white" },
  image: { height: 200, width: 200, borderRadius: 100 },
  button: { backgroundColor: "black", padding: 7, marginTop: 10 },
  buttonText: { color: "white", fontSize: 20 },
});

export default App;
