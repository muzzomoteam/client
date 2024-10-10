import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../../style/styles";
import * as ImagePicker from 'expo-image-picker';

const DashboardEditProfileScreen = ({ navigation }) => {

  const [imageUri , setImageUri] = useState();

  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!result.granted){
      alert("You need to enable permission to access the library")
    }
  }
  useEffect (() => {
    requestPermission();
  } , []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled){
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.log("error :" , error)
    }
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.bottomBorderTitleContainer}>
          <Text style={styles.fontSizeLarge}>Edit Profile</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.sidebarTitleContainer}>
            <Text style={styles.fontSizeOne}>Profile</Text>
          </View>
          <View style={styles.dashboardEditProfileScreenProfileContainer}>
            <View style={{ alignItems: "center" }}>
              <Image
                source={{uri : imageUri}}
                style={styles.dashboardEditProfileScreenProfileImage}
              />
              <View
                style={styles.dashboardEditProfileScreenChageProfileImageIcon}
              >
                <TouchableOpacity onPress={selectImage}>
                  <Image
                    source={require("./../../assets/edit-icon.png")}
                    style={styles.dashboardEditProfileScreenChageProfileImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={
                styles.dashboardEditProfileScreenProfileInformationContainer
              }
            >
              <Text style={styles.fontSizeFour}>FullName</Text>
              <TextInput style={styles.textInputTwo} placeholder="Ali Tareq" />
              <TextInput style={styles.textInputTwo} placeholder="Farhadi" />
              <Text style={styles.fontSizeFour}>Email</Text>
              <TextInput
                style={styles.textInputTwo}
                placeholder="alifarhadi8513@gmail.com"
              />
              <Text style={styles.fontSizeFour}>Phone Number</Text>
              <TextInput style={styles.textInputTwo} placeholder="6477819290" />
              <View
                style={
                  styles.dashboardEditProfileScreenChangePasswordAndDeleteAccountContainer
                }
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ChangePassword");
                  }}
                >
                  <Text style={[styles.fontSizeFour, styles.textColorMuzzomo]}>
                    Change Password
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[styles.fontSizeFour, { color: "red" }]}>
                    Delete Account
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={styles.dashboardEditProfileScreenUpdateButtonContainer}
              >
                <TouchableOpacity style={styles.button}>
                  <Text style={[styles.fontSizeFour, styles.textColorWhite]}>
                    Update
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.sidebarTitleContainer}>
            <Text style={styles.fontSizeOne}>Address</Text>
          </View>
          <View style={styles.dashboardEditProfileScreenProfileContainer}>
            <View
              style={
                styles.dashboardEditProfileScreenProfileInformationContainer
              }
            >
              <Text style={styles.fontSizeFour}>ADDRESS</Text>
              <TextInput
                style={styles.textInputTwo}
                placeholder="18 Glasgow St, Toronto, ON"
              />
              <TextInput style={styles.textInputTwo} placeholder="M5T 2B9" />
              <View
                style={styles.dashboardEditProfileScreenUpdateButtonContainer}
              >
                <TouchableOpacity style={styles.button}>
                  <Text style={[styles.fontSizeFour, styles.textColorWhite]}>
                    Update
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardEditProfileScreen;
