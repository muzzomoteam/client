import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const logout = async () => {
  const access_token = await AsyncStorage.getItem("access_token");
  const refresh_token = await AsyncStorage.getItem("refresh_token");

  axios({
    url: "http://10.0.2.2:8000/user/logout/",
    method: "POST",
    data: { refresh: refresh_token },
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      await AsyncStorage.removeItem("access_token");
      await AsyncStorage.removeItem("refresh_token");
      return response.data;
    })
    .catch((error) => {
      console.error("Error during logout:", error);
    });
};

export default logout;
