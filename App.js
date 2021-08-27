import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";
import image from "./assets/andy.png";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import uploadToAnonymousFilesAsync from "anonymous-files";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Premission to access camera is required");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    if (Platform.OS === "web") {
      const remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri });
    }
  };

  let openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(
        `The image is available for sharing at: ${selectedImage.remoteUri}`
      );
      return;
    }
    await Sharing.shareAsync(selectedImage.localUri);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick an image</Text>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Image
          source={{
            uri:
              selectedImage !== null
                ? selectedImage.localUri
                : "https://picsum.photos/200",
          }}
          //source={image}
          style={styles.image}
        />
      </TouchableOpacity>
      {/* <Button color="black" title="Press me" onPress={() => Alert.alert("Hello World!")} /> */}
      {selectedImage ? (
        <TouchableOpacity onPress={openShareDialog} style={styles.button}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
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
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    margin: 25,
    resizeMode: "contain",
  },
  button: { backgroundColor: "black", padding: 15, marginTop: 10 },
  buttonText: { color: "white", fontSize: 20 },
});

export default App;
