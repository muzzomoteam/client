import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../style/styles";

const windowWidth = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  const [service, setService] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getServices();
  });

  const getServices = () => {
    axios({
      url: "http://10.0.2.2:8000/service/service-search/",
      method: "GET",
    })
      .then((res) => {
        var response = res.data;
        setService(response);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://10.0.2.2:8000/service/three-most-visited-services/",
        {
          params: {
            search: searchQuery,
          },
        }
      );
      // Handle the response data as needed
      navigation.navigate("Service", { searchData  : response.data});
      // You can navigate to another screen or update the UI based on the search results
    } catch (error) {
      console.error("Error searching services:", error);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.fontSizeOne}>Your Go-To Home Maintenance</Text>
          </View>
          <View style={styles.searchBarContainer}>
            <Ionicons
              name="search"
              size={0.08 * windowWidth}
              color={"black"}
              style={styles.searchBarIcon}
            />
            <TextInput
              style={styles.searchBarInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSearch}>
              <Text style={[styles.fontSizeFour, styles.textColorWhite]}>
                view all service
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.meetMuzzomoTextContainer}>
            <Text style={[styles.fontSizeTwo, styles.textAlignOne]}>
              Meet Muzzomo: Your Go-To Home Maintenance app for keeping your
              home in top shape. It's free! Join us today!
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonTwo}
                onPress={() => {navigation.navigate('Service')}}
              >
                <Text style={[styles.fontSizeFour, styles.textColorWhite]}>
                  Book Muzzomo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.jobAcceptedContainer}>
            <View style={styles.jobAcceptedCardContainer}>
              <View style={styles.jobAcceptedTitleContainer}>
                <Text style={[styles.fontSizeThree, styles.textColorMuzzomo]}>
                  JOB ACCEPTED
                </Text>
              </View>
              <View style={styles.jobAcceptedTextBody}>
                <Text style={styles.fontSizeFour}>Hi Mortaza,</Text>
                <Text style={styles.fontSizeFour}>Meet All, your</Text>
                <Text style={styles.fontSizeFour}>Applicance Repair pro</Text>
              </View>
              <View style={styles.jobAcceptedProfileContainer}>
                <View style={styles.jobAcceptedProfileImageContainer}>
                  <Image
                    source={require("./../assets/profile-image.jpg")}
                    style={styles.jobAcceptedProfileImage}
                  />
                </View>
                <View style={styles.jobAcceptedProfileNameContainer}>
                  <Text style={styles.fontSizeFour}>Mortaza Mohammadi</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.titleContainer}>
            <Text style={[styles.fontSizeOne, styles.textAlignOne]}>
              Muzzomo Most Useable Services
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.servicesContainer}>
              {service &&
                service.map((serviceItem) => {
                  return (
                    <TouchableOpacity
                      key={serviceItem.id}
                      onPress={() => {
                        navigation.navigate("ServiceDetail");
                      }}
                    >
                      <View style={styles.servicesCard}>
                        <Image
                          source={{ uri: serviceItem.photo }}
                          style={styles.servicesCardImage}
                        />
                        <Text style={styles.fontSizeThree}>
                          {serviceItem.title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </ScrollView>
          <View style={[styles.buttonContainer]}>
            <TouchableOpacity
              style={styles.buttonThree}
              onPress={() => {
                navigation.navigate("ProRegisterTwo");
              }}
            >
              <Text style={[styles.fontSizeFour, styles.textColorWhite]}>
                Book Muzzomo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
