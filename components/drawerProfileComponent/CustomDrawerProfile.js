import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState, React, useEffect } from "react";
import styles from "../../style/styles";
import checkIfLoggedIn from "../authentication_folder/CheckIfLoggedIn";
import { useNavigation } from "@react-navigation/native";
import logout from "../authentication_folder/LogoutScreen";

const CustomDrawerProfile = () => {
  const navigation = useNavigation();
  const [userDetail, setUserDetail] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    getUserDetail();
  });
  const getUserDetail = async () => {
    const access_token = await checkIfLoggedIn();

    setUserDetail(access_token);

    if (access_token == false) {
      setIsLogin(false);
      console.log("isLogin : ", isLogin)
    } else {
      setIsLogin(true);
    }
    
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
  return (
    <View style={styles.drawerProfileContainer}>
      <View style={styles.drawerProfileImageContainer}>
        <TouchableOpacity>
          <Image
            source={require("./../../assets/profile-image.jpg")}
            style={styles.drawerProfileImage}
          />
        </TouchableOpacity>
      </View>
      {isLogin ? (
        <>
          <View style={[styles.drawerProfileInfoContainer]}>
            <Text>
              {userDetail.user.first_name} {userDetail.user.last_name}
            </Text>
            <TouchableOpacity onPress={logout}>
              <Text>logout</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate("ProviderProfessional");
          }}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomDrawerProfile;
