import { View, Image, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';

import styles from "../../style/styles";
import CustomDrawerProfile from "../drawerProfileComponent/CustomDrawerProfile";

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: "#fff",
          marginTop: -50,
          zIndex: 10,
        }}
      >
        <CustomDrawerProfile/>
        <View style={styles.drawerItemListContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawerContent;
