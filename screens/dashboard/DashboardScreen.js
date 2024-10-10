import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import styles from "../../style/styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DashboardScreen = ({ navigation }) => {
  const [userDetail, setUserDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserDetail();
  }, []); // Ensure useEffect only runs once

  const getUserDetail = async () => {
    setLoading(true);
    const access_token = await AsyncStorage.getItem("access_token");
    try {
      const response = await axios.get("http://10.0.2.2:8000/user/user-detial/", { // Ensure the endpoint URL is correct
        headers: {
          Authorization: `Bearer ${access_token}`, // Ensure the token is correctly formatted
          'Content-Type': 'application/json',
        },
      });
      console.log("access : ", response.data); // Log the response data to check the output
      setUserDetail(response.data); // Set user details
    } catch (error) {
      setError("Error fetching user profile");
      console.error("Error fetching user profile:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <View
            style={[
              styles.sideTitleContainer,
              { marginTop: windowWidth * 0.07 },
            ]}
          >
            <Text style={styles.fontSizeOne}>Dashboard</Text>
          </View>
          <View style={styles.dashboardScreenCardContainer}>
            <View style={styles.dashboardScreenCardProfileContainer}>
              <View style={styles.dashboardScreenProfileImageContainer}>
                <Image
                  source={
                    userDetail?.user?.profile_image
                      ? { uri: userDetail.user.profile_image }
                      : require("./../../assets/profile-image.jpg")
                  }
                  style={styles.dashboardScreenProfileImage}
                />
              </View>
              <View style={styles.dashboardScreenProfileInfo}>
                <View style={styles.dashboardScreenProfileInfoName}>
                  <Text style={styles.fontSizeThree}>
                    {userDetail?.user?.first_name} {userDetail?.user?.last_name}
                  </Text>
                </View>
                <View style={styles.dashboardScreenProfileInfoLocation}>
                  <Ionicons
                    name="location-outline"
                    size={windowWidth * 0.06}
                    color={"#000"}
                    style={styles.dashboardScreenProfileInfoLocationIcon}
                  />
                  <Text style={styles.fontSizeFour}>
                    {userDetail?.address?.city?.name || "Location not available"}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.dashboardScreenMenuContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Job");
                }}
              >
                <View style={styles.dashboardScreenMenuItem}>
                  <View style={styles.dashboardScreenMenuItemTitleContainer}>
                    <Ionicons
                      name="home-outline"
                      size={windowWidth * 0.06}
                      color={"#000"}
                      style={{ marginRight: windowWidth * 0.01 }}
                    />
                    <Text style={styles.fontSizeThree}>My jobs</Text>
                  </View>
                  <Icon
                    name="keyboard-arrow-right"
                    size={windowWidth * 0.06}
                    color={"#000"}
                    style={{ marginRight: windowWidth * 0.01 }}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("JobReports");
                }}
              >
                <View style={styles.dashboardScreenMenuItem}>
                  <View style={styles.dashboardScreenMenuItemTitleContainer}>
                    <Ionicons
                      name="warning-outline"
                      size={windowWidth * 0.06}
                      color={"#000"}
                      style={{ marginRight: windowWidth * 0.01 }}
                    />
                    <Text style={styles.fontSizeThree}>Reports</Text>
                  </View>
                  <Icon
                    name="keyboard-arrow-right"
                    size={windowWidth * 0.06}
                    color={"#000"}
                    style={{ marginRight: windowWidth * 0.01 }}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("EditProfile");
                }}
              >
                <View style={styles.dashboardScreenMenuItem}>
                  <View style={styles.dashboardScreenMenuItemTitleContainer}>
                    <Ionicons
                      name="create-outline"
                      size={windowWidth * 0.06}
                      color={"#000"}
                      style={{ marginRight: windowWidth * 0.01 }}
                    />
                    <Text style={styles.fontSizeThree}>Edit Profile</Text>
                  </View>
                  <Icon
                    name="keyboard-arrow-right"
                    size={windowWidth * 0.06}
                    color={"#000"}
                    style={{ marginRight: windowWidth * 0.01 }}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Message");
                }}
              >
                <View style={styles.dashboardScreenMenuItem}>
                  <View style={styles.dashboardScreenMenuItemTitleContainer}>
                    <Ionicons
                      name="chatbubble-outline"
                      size={windowWidth * 0.06}
                      color={"#000"}
                      style={{ marginRight: windowWidth * 0.01 }}
                    />
                    <Text style={styles.fontSizeThree}>Messages</Text>
                  </View>
                  <Icon
                    name="keyboard-arrow-right"
                    size={windowWidth * 0.06}
                    color={"#000"}
                    style={{ marginRight: windowWidth * 0.01 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dashboardScreenCardsContainer}>
            <View
              style={[
                styles.dashboardScreenCards,
                { backgroundColor: "#ffa500", marginRight: windowWidth * 0.04 },
              ]}
            >
              <Text
                style={[
                  styles.fontSizeFour,
                  { textAlign: "center" },
                  styles.textColorWhite,
                ]}
              >
                110 jobs completed in Toronto
              </Text>
            </View>
            <View
              style={[
                styles.dashboardScreenCards,
                { backgroundColor: "#0000ff" },
              ]}
            >
              <Text
                style={[
                  styles.fontSizeFour,
                  { textAlign: "center" },
                  styles.textColorWhite,
                ]}
              >
                110 jobs completed in Toronto
              </Text>
            </View>
            <View
              style={[
                styles.dashboardScreenCards,
                {
                  backgroundColor: "#008000",
                  marginRight: windowWidth * 0.04,
                  marginTop: windowHeight * 0.02,
                },
              ]}
            >
              <Text
                style={[
                  styles.fontSizeFour,
                  { textAlign: "center" },
                  styles.textColorWhite,
                ]}
              >
                110 jobs completed in Toronto
              </Text>
            </View>
            <View
              style={[
                styles.dashboardScreenCards,
                { backgroundColor: "#ffbf00", marginTop: windowHeight * 0.02 },
              ]}
            >
              <Text
                style={[
                  styles.fontSizeFour,
                  { textAlign: "center" },
                  styles.textColorWhite,
                ]}
              >
                110 jobs completed in Toronto
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
