import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "../style/styles";
import checkIfLoggedIn from "../components/authentication_folder/CheckIfLoggedIn";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ServiceSubmitPaymentScreen = ({ route, navigation }) => {
  const { location, unit, title, id } = route.params;
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [userId, setUserId] = useState();
  const [providerId, setProviderId] = useState(1);
  const [professionalId, setProfessionalId] = useState(1);
  useEffect(() => {
    getProviderId();
  });
  const getProviderId = async () => {
    const access_token =await checkIfLoggedIn();
    setUserId(access_token.user_id);
    console.log(access_token);
    if (access_token.is_professional){
      try {
        const response = await axios.get(
          `http://10.0.2.2:8000/user/professional/${userId}/`
        );
        setProfessionalId(response.data.id);
      } catch (error) {
        console.error("Error fetching professional detail :", error);
      }
    }else{
      try {
        const response = await axios.get(
          `http://10.0.2.2:8000/user/provider/${userId}/`
        );
        setProviderId(response.data.id);
        
      } catch (error) {
        console.error("Error fetching professional detail :", error);
      }
    }
    
  };
  const saveJob = async () => {
    
    var data = {
      start_date: date,
      start_time: time,
      address: location,
      unit: unit,
      provider: providerId,
      professional: professionalId,
      service: id,
    };
    console.log("data is:", data);
    axios({
      url: "http://10.0.2.2:8000/job/jobs-list/",
      method: "POST",
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        navigation.navigate("Service");
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.fontSizeLarge}>Indoor</Text>
          </View>
          <View>
            <View style={styles.textInputContainer}>
              <Text style={styles.fontSizeFour}>Date:</Text>
              <TextInput
                style={[styles.textInput, { marginTop: windowHeight * 0.01 }]}
                placeholder="23/12/2023"
                value={date}
                onChangeText={setDate}
              />
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.fontSizeFour}>Time:</Text>
              <TextInput
                style={[styles.textInput, { marginTop: windowHeight * 0.01 }]}
                placeholder="18:30 PM"
                value={time}
                onChangeText={setTime}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: windowHeight * 0.1,
              borderBottomColor: "#d7d7d7",
              borderWidth: 1,
            }}
          ></View>
          <View
            style={{
              marginTop: windowHeight * 0.04,
              paddingLeft: windowWidth * 0.02,
            }}
          >
            <Text style={styles.fontSizeOne}>Payment</Text>
          </View>
          <View>
            <View style={styles.paypalStripContainer}>
              <View style={styles.paypalStripCard}>
                <TouchableOpacity>
                  <Image
                    style={styles.paypalStripImage}
                    source={require("./../assets/card-image.jpg")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.paypalStripCard}>
                <TouchableOpacity>
                  <Image
                    style={styles.paypalStripImage}
                    source={require("./../assets/card-image.jpg")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginVertical: windowHeight * 0.04 }}>
              <TouchableOpacity style={styles.buttonThree} onPress={saveJob}>
                <Text style={[styles.fontSizeFour, styles.textColorWhite]}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ServiceSubmitPaymentScreen;
