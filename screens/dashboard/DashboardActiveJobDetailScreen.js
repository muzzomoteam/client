import { Text, View, ScrollView, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../style/styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;

const DashboardActiveJobDetailScreen = ({ route }) => {
  const { jobID } = route.params;
  const [jobDetail, setJobDetail] = useState("");
  console.log("Job ID : ", jobID);
  useEffect(() => {
    fetchJobDetail();
  });
  const fetchJobDetail = async () => {
    axios({
      url: `http://10.0.2.2:8000/job/job-detail/${jobID}/`,
      method: "GET",
    })
      .then((res) => {
        const response = res.data;
        console.log(response);
        setJobDetail(response);
      })
      .catch((error) => {
        console.log("error fetching Job : ", error);
      });
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.bottomBorderTitleContainer}>
          <Text style={styles.fontSizeLarge}>{jobDetail.service_title}</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View
            style={
              styles.dashboardActiveCompletedJobDetailScreenElementsContainer
            }
          >
            <View
              style={styles.dashboardActiveCompletedJobDetailScreenElements}
            >
              <Ionicons
                name="today-outline"
                size={windowWidth * 0.05}
                color="#000"
                style={{ marginRight: windowWidth * 0.01 }}
              />
              <Text style={styles.fontSizeFourFour}>{jobDetail.submit_date}</Text>
            </View>
            <View
              style={styles.dashboardActiveCompletedJobDetailScreenElements}
            >
              <Ionicons
                name="time-outline"
                size={windowWidth * 0.05}
                color="#000"
                style={{ marginRight: windowWidth * 0.01 }}
              />
              <Text style={styles.fontSizeFourFour}>{jobDetail.submit_date}</Text>
            </View>
            <View
              style={styles.dashboardActiveCompletedJobDetailScreenElements}
            >
              <Ionicons
                name="location-outline"
                size={windowWidth * 0.05}
                color="#000"
                style={{ marginRight: windowWidth * 0.01 }}
              />
              <Text style={styles.fontSizeFour}>
                {jobDetail.job_address}
              </Text>
            </View>
            <View
              style={styles.dashboardActiveCompletedJobDetailScreenElements}
            >
              <Ionicons
                name="location-outline"
                size={windowWidth * 0.05}
                color="#000"
                style={{ marginRight: windowWidth * 0.01 }}
              />
              <View
                style={
                  styles.dashboardActiveCompletedJobDetailScreenEescriptionContainer
                }
              >
                <Text style={styles.fontSizeFour}>Job Description</Text>
                <Text style={styles.fontSizeFour}>{jobDetail.job_address}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardActiveJobDetailScreen;
