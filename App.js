import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import image from "./assets/andy.png"

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Image
        // source={{
        //   uri: "https://picsum.photos/200",
        // }}
        source={image}
        style={styles.image}
      />
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
  image: { height: 200, width: 200, borderRadius: 100 }
});

export default App;
