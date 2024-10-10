import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../style/styles";

const windowWidth = Dimensions.get("window").width;

const ServiceDetailScreen = ({ navigation, route }) => {
  const { serviceID } = route.params;
  const [serviceDetail, setServiceDetail] = useState("");
  const [location, setLocation] = useState("");
  const [unit, setUnit] = useState("");
  useEffect(() => {
    const fetchServiceDetail = async () => {
      try {
        const response = await axios.get(
          `http://10.0.2.2:8000/service/service-detail/${serviceID}/`
        );
        setServiceDetail(response.data);
        console.log("Service Detail :", response.data);
      } catch (error) {
        console.error("Error fetching service details:", error);
      }
    };

    fetchServiceDetail();
  }, [serviceID]);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.serviceDetailScreenBannerImageContainer}>
          <Image
            style={styles.serviceDetailScreenBannerImage}
            source={{uri : serviceDetail.photo}}
          />
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.serviceDetailScreenTitleContainer}>
            <Text style={styles.fontSizeOne}>{serviceDetail.title}</Text>
          </View>
          <View style={styles.serviceDetailScreenCardsContainer}>
            <View
              style={[
                styles.serviceDetailScreenViewCard,
                styles.muzzomoBackgroundColor,
              ]}
            >
              <Text style={[styles.fontSizeFour, styles.textColorWhite]}>
                150 View
              </Text>
            </View>
            <View
              style={[
                styles.serviceDetailScreenCompletedJobCard,
                { backgroundColor: "#f4f4f4" },
              ]}
            >
              <Text style={[styles.fontSizeFour, styles.textColorMuzzomo]}>
                20 jobs completed
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.serviceDetailScreenDescriptionContainer,
              styles.lightMuzzomoBackgroundColor,
            ]}
          >
            <Text style={styles.fontSizeFour}>{serviceDetail.description}</Text>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.fontSizeThree}>
              Where do you nedd a Muzzomo?
            </Text>
            <View style={styles.iconTextInputContainer}>
              <Ionicons
                name="location-outline"
                size={windowWidth * 0.06}
                color={"#000"}
                style={styles.iconTextInputIcon}
              />
              <TextInput
                style={styles.iconTextInput}
                placeholder="eg.90 Tycos Drive, On, Ca"
                value={location}
                onChangeText={setLocation}
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Unit/Suite"
                value={unit}
                onChangeText={setUnit}
              />
            </View>
          </View>
          <View style={{ marginTop: windowWidth * 0.07 }}>
            <TouchableOpacity
              style={styles.buttonThree}
              onPress={() => {
                navigation.navigate("ServiceSubmitPayment", { unit, location, title: serviceDetail.title, id : serviceDetail.id });
              }}
            >
              <Text style={[styles.fontSizeFour, styles.textColorWhite]}>
                Book Muzzomo
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: windowWidth * 0.07 }}>
            <Text style={styles.fontSizeFour}>
              Not sure if this is the right service for you?
              <Text style={[styles.fontSizeFour, styles.textColorMuzzomo]}>
                {" "}
                Chat with us
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ServiceDetailScreen;
