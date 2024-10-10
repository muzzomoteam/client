import {
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import styles from "../style/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import handleLogin from "../components/authentication_folder/AuthService";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ProLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginPress = async () => {
    try {
      const { access_token, refresh_token} = await handleLogin(email, password);
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.error('Login failed!', error);
    }
  };
  return (
    <View style={styles.borderContainer}>
      <View style={styles.logoImageContainer}>
        <Image
          source={require("./../assets/muzzomo-logo.jpg")}
          style={styles.logoImage}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: windowHeight * 0.04 }}>
        <Text style={styles.fontSizeOne}>Login to your pro account!</Text>
      </View>
      <View style={{ paddingHorizontal: windowWidth * 0.04 }}>
        <View style={styles.textInputContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="email"
              size={windowWidth * 0.05}
              color={"#000"}
              style={{ marginRight: windowWidth * 0.01 }}
            />
            <Text style={styles.fontSizeFour}>Email</Text>
          </View>
          <TextInput
            style={[styles.textInput, { marginTop: windowHeight * 0.01 }]}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.textInputContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="lock"
              size={windowWidth * 0.05}
              color={"#000"}
              style={{ marginRight: windowWidth * 0.01 }}
            />
            <Text style={styles.fontSizeFour}>Password</Text>
          </View>
          <TextInput
            style={[styles.textInput, { marginTop: windowHeight * 0.01 }]}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View
          style={{
            alignItems: "flex-end",
            marginVertical: windowHeight * 0.02,
          }}
        >
          <TouchableOpacity>
            <Text style={[styles.fontSizeFour, styles.textColorMuzzomo]}>
              I forgot my password
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: windowHeight * 0.03 }}>
          <TouchableOpacity style={[styles.button]} onPress={handleLoginPress}>
            <Text style={[styles.fontSizeFour, styles.textColorWhite]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: windowHeight * 0.02 }}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              navigation.navigate("ProRegister");
            }}
          >
            <Text style={[styles.fontSizeFour, styles.textColorWhite]}>
              New to Muzzomo
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ProLoginScreen;
