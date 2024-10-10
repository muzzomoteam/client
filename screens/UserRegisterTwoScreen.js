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

const UserRegisterTwoScreen = ({ navigation, route }) => {
  const [userID, setUserID] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const { userEmail } = route.params;
  console.log("User Two Register user email :", userEmail);
  useEffect(() => {
    getUserIdByEmailAddress();
  });

  const getUserIdByEmailAddress = async () => {
    axios({
      url: `http://10.0.2.2:8000/user/get-user-id/${userEmail}/`,
      method: "GET",
    })
      .then((res) => {
        const response = res.data;
        setUserID(response.id);
      })
      .catch((error) => {
        console.log("Error occured about getting user id :", error);
      });
  };

  const saveProviderDetail = async () => {
    var data = {
      phone: phoneNumber,
      admin: userID,
      address: 1,
    };
    console.log(data);
    axios({
      url: "http://10.0.2.2:8000/user/provider-register/",
      method: "POST",
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        const response = res.data;
        navigation.navigate('UserLogin');
      })
      .catch((error) => {
        console.log("error occured about registeration professional :", error);
      });
  };

  return (
    <View style={styles.borderContainer}>
      <View style={styles.logoImageContainer}>
        <Image
          source={require("./../assets/muzzomo-logo.jpg")}
          style={styles.logoImage}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: windowWidth * 0.1 }}>
        <Text style={styles.fontSizeThree}>Become a Muzzomo Member</Text>
      </View>
      <View
        style={{
          paddingHorizontal: windowWidth * 0.04,
          marginTop: windowHeight * 0.04,
        }}
      >
        <View style={styles.textInputContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="md-call"
              size={windowWidth * 0.05}
              color={"#000"}
              style={{ marginRight: windowWidth * 0.01 }}
            />
            <Text style={styles.fontSizeFour}>Phone Number</Text>
          </View>
          <TextInput
            style={[styles.textInput, { marginTop: windowHeight * 0.01 }]}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <View style={{ marginTop: windowHeight * 0.04 }}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={saveProviderDetail}
          >
            <Text style={[styles.fontSizeFour, styles.textColorWhite]}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserRegisterTwoScreen;
