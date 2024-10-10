import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../style/styles";

const windowHeight = Dimensions.get("window").height;

const DashboardJobsScreen = ({ navigation , route }) => {
  const [userJob, setuserJob] = useState([]);
  const [userCompletedJob, setuserCompletedJob] = useState([]);
  const {isProfessional , userId} = route.params;
  useEffect(() => {
    getUserJob();
    getuserCompletedJob();
  });

    const getUserJob = () => {
      if (isProfessional){
        axios({
          url:`http://10.0.2.2:8000/job/professional-jobs/${userId}/`,
          method: "GET",
        })
          .then((res) => {
            const response = res.data;
            setuserJob(response);
          })
          .catch((error) => {
            console.log("Error Fetching Jobs : ", error);
          });
        }else {
          axios({
            url:`http://10.0.2.2:8000/job/provider-jobs/${userId}/`,
            method: "GET",
          })
            .then((res) => {
              const response = res.data;
              setuserJob(response);
            })
            .catch((error) => {
              console.log("Error Fetching Jobs : ", error);
            });
        }
    };
  
    const getuserCompletedJob = () => {
      if (isProfessional){
        axios({
          url: `http://10.0.2.2:8000/job/professional-completed-jobs/${userId}/`,
          method: "GET",
        })
          .then((res) => {
            const response = res.data;
            setuserCompletedJob(response);
          })
          .catch((error) => {
            console.log("Error Fetching Jobs : ", error);
          });
      }else {
        axios({
          url: `http://10.0.2.2:8000/job/provider-completed-jobs/${userId}/`,
          method: "GET",
        })
          .then((res) => {
            const response = res.data;
            setuserCompletedJob(response);
          })
          .catch((error) => {
            console.log("Error Fetching Jobs : ", error);
          });
      }
    };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.bottomBorderTitleContainer}>
          <Text style={styles.fontSizeLarge}>Jobs</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.sidebarTitleContainer}>
            <Text style={styles.fontSizeTwo}>Active Job (2)</Text>
          </View>
          <View style={styles.DashboardJobsScreenCardContainer}>
            {userJob.map((jobItem) => {
              return (
                <TouchableOpacity
                  key={jobItem.id}
                  onPress={() => {
                    navigation.navigate("ActiveJobDetail", { jobID: jobItem.id });
                  }}
                >
                  <View style={styles.DashboardJobsScreenCard}>
                    <View style={styles.DashboardJobsScreenCardImageContainer}>
                      <Image
                        style={styles.DashboardJobsScreenCardImage}
                        source={{ uri: jobItem.service_photo }}
                      />
                    </View>
                    <View style={styles.DashboardJobsScreenCardDetailContainer}>
                      <View
                        style={styles.DashboardJobsScreenCardTitleContainer}
                      >
                        <Text style={styles.fontSizeFour}>
                          {jobItem.service_title}
                        </Text>
                      </View>
                      <View
                        style={
                          styles.DashboardJobsScreenCardInformationContainer
                        }
                      >
                        <Text style={styles.fontSizeSix}>
                          {jobItem.submit_date}
                        </Text>
                        <Text style={styles.fontSizeSix}>
                          {jobItem.submit_date}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View
          style={[styles.bodyContainer, { marginBottom: windowHeight * 0.04 }]}
        >
          <View style={styles.sidebarTitleContainer}>
            <Text style={styles.fontSizeTwo}>Completed Job (2)</Text>
          </View>
          <View style={styles.DashboardJobsScreenCardContainer}>
            {userCompletedJob.map((jobItem) => {
              return (
                <TouchableOpacity
                  key={jobItem.id}
                  onPress={() => {
                    navigation.navigate("CompletedJobDetail", {completedJobID : jobItem.id});
                  }}
                >
                  <View style={styles.DashboardJobsScreenCard}>
                    <View style={styles.DashboardJobsScreenCardImageContainer}>
                      <Image
                        style={styles.DashboardJobsScreenCardImage}
                        source={{ uri: jobItem.service_photo }}
                      />
                    </View>
                    <View style={styles.DashboardJobsScreenCardDetailContainer}>
                      <View
                        style={styles.DashboardJobsScreenCardTitleContainer}
                      >
                        <Text style={styles.fontSizeFour}>
                          {jobItem.service_title}
                        </Text>
                      </View>
                      <View
                        style={
                          styles.DashboardJobsScreenCardInformationContainer
                        }
                      >
                        <Text style={styles.fontSizeSix}>
                          {jobItem.submit_date}
                        </Text>
                        <Text style={styles.fontSizeSix}>
                          {jobItem.submit_date}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardJobsScreen;
