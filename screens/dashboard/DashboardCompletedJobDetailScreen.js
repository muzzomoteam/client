import { Text, View, ScrollView  , Image , TextInput, Dimensions} from "react-native";
import React, {useState , useEffect} from "react";
import styles from "../../style/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";

const  windowWidth = Dimensions.get('window').width;
const  windowHeight = Dimensions.get('window').height;

const DashboardCompletedJobDetailScreen = ({route}) => {
  const {completedJobID} = route.params;
  const [jobDetail , setJobDetail] = useState("");
  useEffect(() => {
    fetchJobDetail();
  });
  const fetchJobDetail = async () => {
    axios({
      url: `http://10.0.2.2:8000/job/job-detail/${completedJobID}/`,
      method: "GET",
    })
      .then((res) => {
        const response = res.data;
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
          <Text style={styles.fontSizeLarge}>Decks & Fences</Text>
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
                color={"#000"}
                style={{ marginRight: 8 }}
              />
              <Text style={styles.fontSizeFour}>Mon,Oct 23,2023</Text>
            </View>
            <View
              style={styles.dashboardActiveCompletedJobDetailScreenElements}
            >
              <Ionicons
                name="time-outline"
                size={windowWidth * 0.05}
                color={"#000"}
                style={{ marginRight: 8 }}
              />
              <Text style={styles.fontSizeFour}>12:30:00 PM</Text>
            </View>
            <View
              style={styles.dashboardActiveCompletedJobDetailScreenElements}
            >
              <Ionicons
                name="location-outline"
                size={windowWidth * 0.05}
                color={"#000"}
                style={{ marginRight: 8 }}
              />
              <Text style={styles.fontSizeFour}>
                18 Glasgow Street, Toronto, ON M5T 2B9
              </Text>
            </View>
            <View
              style={styles.dashboardActiveCompletedJobDetailScreenElements}
            >
              <Ionicons
                name="location-outline"
                size={windowWidth * 0.05}
                color={"#000"}
                style={{ marginRight: 8 }}
              />
              <View
                style={
                  styles.dashboardActiveCompletedJobDetailScreenEescriptionContainer
                }
              >
                <Text style={styles.fontSizeFour}>Job Description</Text>
                <Text style={styles.fontSizeFour}>fixed</Text>
              </View>
            </View>
          </View>
          <View style={styles.sidebarTitleContainer}>
            <Text style={styles.fontSizeTwo}>Muzzomo Pro</Text>
          </View>
          <View style={styles.dashboardCompletedJobScreenMuzzomoProCard}>
          <View style={styles.dashboardCompletedJobScreenProfileImageContainer}>
            <Image source={require('./../../assets/profile-image.jpg')}
              style={styles.dashboardCompletedJobScreenProfileImage}
            />
          </View>
          <View style={styles.dashboardCompletedJobScreenProfileInformationContainer}>
            <Text style={[styles.fontSizeFour, {marginVertical : windowHeight * 0.004}]}>Mortaza Mohammadi</Text>
            <Text style={[styles.fontSizeFour, {marginVertical : windowHeight * 0.004}]}>Appliance Repair</Text>
            <View style={styles.dashboardCompletedJobScreenMuzzomoProVerifiedContainer}>
              <Image source={require('./../../assets/blue-tick.png')}
                style={styles.dashboardCompletedJobScreenMuzzomoProVerifiedImage}
              />
              <Text style={styles.fontSizeFour}>Verified by Muzzomo</Text>
            </View>
          </View>
        </View>
        <View style={styles.dashboardCompletedJobScreenFeedbackContainer}>
            <Text style={styles.fontSizeOne}>Give us feeback about pro</Text>
            <TextInput style={styles.dashboardCompletedJobScreenFeedbackTextInput} placeholder="write your feedback" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardCompletedJobDetailScreen;
