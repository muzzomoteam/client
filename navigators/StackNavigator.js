import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ServiceScreen from "../screens/ServiceScreen";
import ServiceDetailScreen from "../screens/ServiceDetailScreen";
import ServiceSubmitPaymentScreen from "../screens/ServiceSubmitPaymentScreen";
import DashboardScreen from "../screens/dashboard/DashboardScreen";
import DashboardReportsScreen from "../screens/dashboard/DashboardReportsScreen";
import DashboardJobsScreen from "../screens/dashboard/DashboardJobsScreen";
import DashboardActiveJobDetailScreen from "../screens/dashboard/DashboardActiveJobDetailScreen";
import DashboardCompletedJobDetailScreen from "../screens/dashboard/DashboardCompletedJobDetailScreen";
import DashboardMessageScreen from "../screens/dashboard/DashboardMessageScreen";
import DashboardEditProfileScreen from "../screens/dashboard/DashboardEditProfileScreen";
import DashboardChangePasswordScreen from "../screens/dashboard/DashboardChangePasswordScreen";
import DashboardAvaliableJobScreen from "../screens/dashboard/DashboardAvaliableJobScreen";
import ProLoginScreen from "../screens/ProLoginScreen";
import UserLoginScreen from "../screens/UserLoginScreen";
import UserRegisterScreen from "../screens/UserRegisterScreen";
import ProRegisterScreen from "../screens/ProRegisterScreen";
import ProRegisterTwoScreen from "../screens/ProRegisterTwoScreen";
import ProRegisterThreeScreen from "../screens/ProRegisterThreeScreen";
import DashboardMessageDetailScreen from "../screens/dashboard/DashboardMessageDetailScreen";
import UserVerifyScreen from "../screens/UserVerifyScreen";
import UserVerifyScreenTwo from "../screens/UserVerifyScreenTwo";
import UserRegisterTwoScreen from "../screens/UserRegisterTwoScreen";
import ProviderProfessionalScreen from "../screens/ProviderProfessionalScreen";

const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="MessageDetail"
        component={DashboardMessageDetailScreen}
      />
      <Stack.Screen
        name="ProRegisterThree"
        component={ProRegisterThreeScreen}
      />
      <Stack.Screen name="ProRegisterTwo" component={ProRegisterTwoScreen} />
      <Stack.Screen name="ProRegister" component={ProRegisterScreen} />
      <Stack.Screen name="UserRegister" component={UserRegisterScreen} />
      <Stack.Screen name="UserLogin" component={UserLoginScreen} />
      <Stack.Screen name="ProLogin" component={ProLoginScreen} />
      <Stack.Screen name="UserVerify" component={UserVerifyScreen} />
      <Stack.Screen name="UserVerifyTwo" component={UserVerifyScreenTwo} />
      <Stack.Screen name="UserRegisterTwo" component={UserRegisterTwoScreen} />
      <Stack.Screen name="ProviderProfessional" component={ProviderProfessionalScreen} />
      <Stack.Screen
        name="AvaliableJob"
        component={DashboardAvaliableJobScreen}
      />
      <Stack.Screen
        name="ChangePassword"
        component={DashboardChangePasswordScreen}
      />
      <Stack.Screen name="EditProfile" component={DashboardEditProfileScreen} />
      <Stack.Screen name="Message" component={DashboardMessageScreen} />
      <Stack.Screen
        name="CompletedJobDetail"
        component={DashboardCompletedJobDetailScreen}
      />
      <Stack.Screen
        name="ActiveJobDetail"
        component={DashboardActiveJobDetailScreen}
      />
      <Stack.Screen name="Job" component={DashboardJobsScreen} />
      <Stack.Screen name="JobReports" component={DashboardReportsScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen
        name="ServiceSubmitPayment"
        component={ServiceSubmitPaymentScreen}
      />
      <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} />
      <Stack.Screen name="Service" component={ServiceScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
