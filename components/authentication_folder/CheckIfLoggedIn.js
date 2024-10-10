import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const checkIfLoggedIn = async () => {
  try {
    const access_token = await AsyncStorage.getItem("access_token");
    const response = await axios.get("http://10.0.2.2:8000/user/profile/", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response.data;
  } catch (error) {
    return false;
  }
};

export default checkIfLoggedIn;
