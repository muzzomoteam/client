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

const ProRegisterTwoScreen = ({ navigation, route }) => {
  const [userID, setUserID] = useState();
  const [licenseNumber, setLicenseNumber] = useState();
  const [insuranceCoverage, setInsuranceCoverage] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const { userEmail } = route.params;

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
  const updataUserProfessionalStatus = async () => {
    var data = {
      id: userID,
    };
    axios({
      url: `http://10.0.2.2:8000/user/update-professional-status/${userID}/`,
      method: "PUT",
      data: data,
    })
      .then((response) => {
        return true;
      })
      .catch((error) => {
        console.error("Error updating professional status:", error);
        return false;
      });
  };
  const saveProfessionalDetail = async () => {
    var data = {
      phone: phoneNumber,
      license_number: licenseNumber,
      insurance_number: insuranceCoverage,
      admin: userID,
      address: 1,
      service: 3,
    };
    updataProfessional = updataUserProfessionalStatus();
    if (updataProfessional) {
      axios({
        url: "http://10.0.2.2:8000/user/professional-register/",
        method: "POST",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          const response = res.data;
          navigation.navigate("ProLogin");
        })
        .catch((error) => {
          console.log(
            "error occured about registeration professional :",
            error
          );
        });
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
      <View style={{ alignItems: "center", marginTop: windowWidth * 0.1 }}>
        <Text style={styles.fontSizeThree}>Become a Muzzomo Professional</Text>
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
        <View style={styles.textInputContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="md-mail"
              size={windowWidth * 0.05}
              color={"#000"}
              style={{ marginRight: windowWidth * 0.01 }}
            />
            <Text style={styles.fontSizeFour}>Insurance Coverage</Text>
          </View>
          <TextInput
            style={[styles.textInput, { marginTop: windowHeight * 0.01 }]}
            value={insuranceCoverage}
            onChangeText={setInsuranceCoverage}
          />
        </View>
        <View style={styles.textInputContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="md-mail"
              size={windowWidth * 0.05}
              color={"#000"}
              style={{ marginRight: windowWidth * 0.01 }}
            />
            <Text style={styles.fontSizeFour}>License Number</Text>
          </View>
          <TextInput
            style={[styles.textInput, { marginTop: windowHeight * 0.01 }]}
            value={licenseNumber}
            onChangeText={setLicenseNumber}
          />
        </View>
        <View style={{ marginTop: windowHeight * 0.04 }}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={saveProfessionalDetail}
          >
            <Text style={[styles.fontSizeFour, styles.textColorWhite]}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProRegisterTwoScreen;
