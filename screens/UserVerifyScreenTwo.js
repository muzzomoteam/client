import {
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../style/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const UserVerifyTwo = ({ navigation , route }) => {
  const [verifyCode , setVerifyCode] = useState("");
  const {userEmail} = route.params;
  console.log("User email address : ", userEmail);
  submitVerifyCode = async () => {
    var data = {
      "otp" : verifyCode
    }
    axios ({
      url : "http://10.0.2.2:8000/user/verify/",
      method : "POST",
      data : data,
      headers : {
        "Content-Type" : "application/json"
      }
    }).then((res) => {
      const response = res.data;
      navigation.navigate('UserLogin');
    }).catch((error) => {
      console.log("Error occured about sending otp code ", error)
    });
  }

  return (
    <View style={styles.borderContainer}>
      <View style={styles.logoImageContainer}>
        <Image
          source={require("./../assets/muzzomo-logo.jpg")}
          style={styles.logoImage}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: windowHeight * 0.04 }}>
        <Text style={styles.fontSizeOne}>Verify your account</Text>
      </View>
      <View style={{ paddingHorizontal: windowWidth * 0.04 }}>
        <View style={styles.textInputContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="md-mail"
              size={windowWidth * 0.05}
              color={"#000"}
              style={{ marginRight: windowWidth * 0.01 }}
            />
            <Text style={styles.fontSizeFour}>Code</Text>
          </View>
          <TextInput
            style={[styles.textInput, { marginTop: windowHeight * 0.01 }]}
            value={verifyCode}
            onChangeText={setVerifyCode}
          />
        </View>
        <View style={{ marginTop: windowHeight * 0.03 }}>
          <TouchableOpacity style={[styles.button]} onPress={submitVerifyCode}>
            <Text style={[styles.fontSizeFour, styles.textColorWhite]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserVerifyTwo;
