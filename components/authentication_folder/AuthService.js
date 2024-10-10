import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const handleLogin = async (email, password) => {
  try {
    const response = await axios.post("http://10.0.2.2:8000/user/login/", {
      email: email,
      password: password,
    });
    const { access_token, refresh_token } = response.data;
    await AsyncStorage.setItem('access_token' , access_token);
    await AsyncStorage.setItem('refresh_token' , refresh_token);
    return { access_token, refresh_token };
  } catch (error) {
    throw error.response.data;
  }
};

export default handleLogin;
