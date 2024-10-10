import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../style/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import checkIfLoggedIn from "../../components/authentication_folder/CheckIfLoggedIn";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const DashboardAvaliableJobScreen = () => {
  const [availableJob, setAvailableJob] = useState([]);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    getAvailableJob();
  });

  const getAvailableJob = async () => {
    const access_token = await checkIfLoggedIn();
    setUserId(access_token.user_id);
    axios({
      url: "http://10.0.2.2:8000/job/active-jobs-list/",
      method: "GET",
    })
      .then((res) => {
        const response = res.data;
        setAvailableJob(response);
      })
      .catch((error) => {
        console.log("Error occured about fetching available job :", error);
      });
  };

  const requestForJob = (jobId) => {
    axios({
      url: `http://10.0.2.2:8000/job/request-job/${jobId}/`,
      method: "POST",
      data: {professional_id: userId},
    }).then((res) => {
        console.log('successfuly');
      })
      .catch((error) => {
        console.log("Error occured about deactive job:", error);
      });
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.bottomBorderTitleContainer}>
          <Text style={styles.fontSizeLarge}>Avaliable Jobs</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={{ marginBottom: windowHeight * 0.04 }}>
            {availableJob.map((availableJobItem) => {
              return (
                <View key={availableJobItem.id} style={styles.avaliableJobCard}>
                  <View style={styles.avaliableJobCardTitleContainer}>
                    <Text style={styles.fontSizeTwo}>
                      {availableJobItem.service_title}
                    </Text>
                  </View>
                  <View style={styles.avaliableJobCardDetails}>
                    <Ionicons
                      name="time-outline"
                      size={windowWidth * 0.06}
                      color={"#000"}
                      style={{ marginRight: windowWidth * 0.01 }}
                    />
                    <Text style={styles.fontSizeFour}>
                      {availableJobItem.start_date}
                    </Text>
                  </View>
                  <View style={styles.avaliableJobCardDetails}>
                    <Ionicons
                      name="today-outline"
                      size={windowWidth * 0.06}
                      color={"#000"}
                      style={{ marginRight: windowWidth * 0.01 }}
                    />
                    <Text style={styles.fontSizeFour}>
                      {availableJobItem.start_time}
                    </Text>
                  </View>
                  <View style={styles.avaliableJobCardDetails}>
                    <Ionicons
                      name="location-outline"
                      size={windowWidth * 0.06}
                      color={"#000"}
                      style={{ marginRight: windowWidth * 0.01 }}
                    />
                    <Text style={styles.fontSizeFour}>
                      {availableJobItem.address}
                    </Text>
                  </View>
                  <View style={{ paddingHorizontal: windowWidth * 0.02 }}>
                    <Text style={styles.fontSizeFour}>Job Description:</Text>
                    <Text
                      style={[
                        styles.fontSizeFive,
                        { marginTop: windowHeight * 0.02 },
                      ]}
                    >
                      {availableJob.job_description}
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: windowHeight * 0.04,
                    }}
                  >
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => requestForJob(availableJobItem.id)}
                    >
                      <Text
                        style={[styles.fontSizeFour, styles.textColorWhite]}
                      >
                        Request job
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardAvaliableJobScreen;
