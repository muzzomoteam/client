import {
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  Alert,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import styles from "../style/styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const UserRegisterScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const saveProfessionalInformation = async () => {
    if (!firstName || !lastName || !email || !password || !passwordTwo) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        "Error",
        "Password must be at least 8 characters long and contain at least one letter, one number, and one special character"
      );
      return;
    }

    if (password !== passwordTwo) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    var data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password2: passwordTwo,
    };
    console.log(data);

    try {
      const res = await axios({
        url: "http://10.0.2.2:8000/user/register/",
        method: "POST",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      var response = res.data;
      console.log("User email address :", response.data.email);
      navigation.navigate("UserVerifyTwo", { userEmail: response.data.email });
    } catch (error) {
      console.error("Error registering user:", error);
      Alert.alert("Registration Error", "There was a problem registering the user.");
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.borderContainer}>
        <View style={styles.logoImageContainer}>
          <Image
            source={require("./../assets/muzzomo-logo.jpg")}
            style={styles.logoImage}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: windowHeight * 0.04 }}>
          <Text style={styles.fontSizeOne}>Become a Muzzomo Member!</Text>
        </View>
        <View style={{ paddingHorizontal: windowWidth * 0.04 }}>
          <View style={styles.textInputContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="person"
                size={windowWidth * 0.05}
                color={"#000"}
                style={{ marginRight: windowWidth * 0.01 }}
              />
              <Text style={styles.fontSizeFour}>FirstName</Text>
            </View>
            <TextInput
              style={[styles.textInput, { marginTop: windowHeight * 0.01 }]}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.textInputContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="person"
                size={windowWidth * 0.05}
                color={"#000"}
                style={{ marginRight: windowWidth * 0.01 }}
              />
              <Text style={styles.fontSizeFour}>LastName</Text>
            </View>
            <TextInput
              style={[styles.textInput, { marginTop: windowHeight * 0.01 }]}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <View style={styles.textInputContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="mail-outline"
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
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.textInputContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="lock-closed-outline"
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
              secureTextEntry
              autoCapitalize="none"
            />
          </View>
          <View style={styles.textInputContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="lock-closed-outline"
                size={windowWidth * 0.05}
                color={"#000"}
                style={{ marginRight: windowWidth * 0.01 }}
              />
              <Text style={styles.fontSizeFour}>Confirm Password</Text>
            </View>
            <TextInput
              style={[styles.textInput, { marginTop: windowHeight * 0.01 }]}
              value={passwordTwo}
              onChangeText={setPasswordTwo}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>
          <View style={{ marginTop: windowHeight * 0.04 }}>
            <Text style={[styles.fontSizeFour, { textAlign: "center" }]}>
              By signing up with Muzzomo, you are agreeing to Muzzomo's
            </Text>
          </View>
          <View style={{ marginTop: windowHeight * 0.01 }}>
            <TouchableOpacity>
              <Text
                style={[
                  styles.fontSizeFour,
                  styles.textColorMuzzomo,
                  { textAlign: "center" },
                ]}
              >
                Terms and Conditions
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: windowHeight * 0.02 }}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={saveProfessionalInformation}
            >
              <Text style={[styles.fontSizeFour, styles.textColorWhite]}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserRegisterScreen;
