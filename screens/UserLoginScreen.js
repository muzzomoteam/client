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
import Icon from "react-native-vector-icons/MaterialIcons";
import handleLogin from "../components/authentication_folder/AuthService";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const UserLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginPress = async () => {
    try {
      const { access_token, refresh_token } = await handleLogin(
        email,
        password
      );
      navigation.reset({
          index: 0,
          routes: [{ name: "HomeScreen" }], // This prevents going back to the login screen
        });
    } catch (error) {
      console.error("Login failed!", error);
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
        <Text style={styles.fontSizeOne}>Login to your user account!</Text>
      </View>
      <View style={{ paddingHorizontal: windowWidth * 0.02 }}>
        <View style={styles.textInputContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              name="email"
              size={windowWidth * 0.05}
              color={"#000"}
              style={{ marginRight: windowWidth * 0.01 }}
            />
            <Text style={styles.fontSizeFour}>Email</Text>
          </View>
          <TextInput
            style={[styles.textInput, { marginTop: 0.01 }]}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.textInputContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
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
        <View style={{ marginVertical: windowHeight * 0.01 }}>
          <TouchableOpacity style={[styles.button]} onPress={handleLoginPress}>
            <Text style={[styles.fontSizeFour, styles.textColorWhite]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: windowHeight * 0.01,
            marginBottom: windowWidth * 0.02,
          }}
        >
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              navigation.navigate("UserRegister");
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
};

export default UserLoginScreen;
