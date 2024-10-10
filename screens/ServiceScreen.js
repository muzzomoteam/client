import {
  Text,
  View,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import styles from "../style/styles";

const windowWidth = Dimensions.get("window").width;

const ServiceScreen = ({ navigation, route }) => {
  const [allServices, setAllServices] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    getAllServices();
    if (route.params?.searchData) {
      // If searchData is passed as route params, set the search result
      setSearchResult(route.params.searchData);
    }
  }, []);

  const getAllServices = async () => {
    try {
      const response = await axios.get("http://10.0.2.2:8000/service/service/");
      setAllServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://10.0.2.2:8000/service/service-search/",
        {
          params: {
            search: searchText,
          },
        }
      );
      setSearchResult(response.data);
    } catch (error) {
      console.error("Error searching services:", error);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.fontSizeOne}>Home Card, Inside and Out.</Text>
          </View>
          <View style={styles.servicesScreenSearchBarContainer}>
            <Ionicons
              name="search"
              size={windowWidth * 0.06}
              color={"#000"}
              style={styles.servicesScreenSearchBarIcon}
            />
            <TextInput
              style={styles.servicesScreenSearchBarInput}
              placeholder="Search services"
              placeholderTextColor={"gray"}
              value={searchText}
              onChangeText={setSearchText}
              onSubmitEditing={handleSearch}
            />
          </View>
          <View style={styles.servicesScreenListContainer}>
            {searchResult.length > 0 ? (
              // If searchResult has items, render them
              searchResult.map((service, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate("ServiceDetail", { serviceID: service.id });
                  }}
                >
                  <View style={styles.servicesScreenListItem}>
                    <Text style={styles.fontSizeThree}>{service.title}</Text>
                    <Ionicons
                      name="chevron-forward-sharp"
                      size={windowWidth * 0.065}
                      color={"#000"}
                    />
                  </View>
                </TouchableOpacity>
              ))
            ) : allServices.length > 0 ? (
              // If no search result, render all services
              allServices.map((service, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate("ServiceDetail", { serviceID: service.id });
                  }}
                >
                  <View style={styles.servicesScreenListItem}>
                    <Text style={styles.fontSizeThree}>{service.title}</Text>
                    <Ionicons
                      name="chevron-forward-sharp"
                      size={windowWidth * 0.065}
                      color={"#000"}
                    />
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              // If no services available, render a message
              <Text>No services available</Text>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ServiceScreen;
