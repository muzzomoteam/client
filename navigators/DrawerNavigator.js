import { createDrawerNavigator } from "@react-navigation/drawer";
import ServiceScreen from "./../screens/ServiceScreen";
import CustomDrawerContent from "../components/navigators/CustomDrawerContent";
import DashboardAvaliableJob from "./../screens/dashboard/DashboardAvaliableJobScreen";
import DashboardMessageScreen from "./../screens/dashboard/DashboardMessageScreen";
import DashboardScreen from "./../screens/dashboard/DashboardScreen";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import StackNavigator from "./StackNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isProfessional, setIsProfessional] = useState(false);

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = async () => {
    const access_token = await AsyncStorage.getItem("access_token");

    if (access_token) {
      setIsLogin(true);

      // Fetch the professional status from the API
      fetch('http://10.0.2.2:8000/user/someprofessional/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`,  // Replace with actual token logic
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Update isProfessional state based on API response
          setIsProfessional(data.isProfessional);
        })
        .catch((error) => {
          console.error('Error fetching professional status:', error);
          setIsProfessional(false); // Handle error by setting to false
        });
    } else {
      setIsLogin(false);
    }
  };

  

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTitleStyle: { display: "none" },
        headerStyle: {
          backgroundColor: "#006d77",
        },
        headerTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={focused ? "#fff" : "#000"}
            />
          ),
          drawerActiveBackgroundColor: "#b9e5e1",
          drawerActiveTintColor: "#fff",
        }}
      />
      <Drawer.Screen
        name="Services"
        component={ServiceScreen}
        options={{
          title: "Services",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="cog-outline"
              size={size}
              color={focused ? "#fff" : "#000"}
            />
          ),
          drawerActiveBackgroundColor: "#b9e5e1",
          drawerActiveTintColor: "#fff",
        }}
      />
      {isLogin && (
        <>
          {isProfessional && (
            <Drawer.Screen
              name="Avaliable Job"
              component={DashboardAvaliableJob}
              options={{
                title: "Avaliable Jobs",
                drawerIcon: ({ focused, size }) => (
                  <Ionicons
                    name="briefcase-outline"
                    size={size}
                    color={focused ? "#fff" : "#000"}
                  />
                ),
                drawerActiveBackgroundColor: "#b9e5e1",
                drawerActiveTintColor: "#fff",
              }}
            />
          )}
          <Drawer.Screen
            name="Message"
            component={DashboardMessageScreen}
            options={{
              title: "Message",
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name="chatbubble-outline"
                  size={size}
                  color={focused ? "#fff" : "#000"}
                />
              ),
              drawerActiveBackgroundColor: "#b9e5e1",
              drawerActiveTintColor: "#fff",
            }}
          />
          <Drawer.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
              title: "Dashboard",
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name="md-apps-outline"
                  size={size}
                  color={focused ? "#fff" : "#000"}
                />
              ),
              drawerActiveBackgroundColor: "#b9e5e1",
              drawerActiveTintColor: "#fff",
            }}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
