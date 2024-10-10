import { Text, View, ScrollView, TextInput , TouchableOpacity, Dimensions} from "react-native";
import React from "react";
import styles from "../../style/styles";

const windowHeight = Dimensions.get('window').height;

const DashboardChangePasswordScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.bottomBorderTitleContainer}>
          <Text style={styles.fontSizeLarge}>Change Password</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={[styles.textInputContainer , {marginTop : windowHeight * 0.04}]}>
            <Text style={styles.fontSizeFour}>Old Password</Text>
            <TextInput
              style={[styles.textInput, { marginTop: windowHeight * 0.01 }]}
            />
          </View>
          <View style={[styles.textInputContainer , {}]}>
            <Text style={styles.fontSizeFour}>New Password</Text>
            <TextInput
              style={[styles.textInput, { marginTop: windowHeight * 0.01 }]}
            />
          </View>
          <View style={[styles.textInputContainer , {}]}>
            <Text style={styles.fontSizeFour}>Retype New Password</Text>
            <TextInput
              style={[styles.textInput, { marginTop: windowHeight * 0.01 }]}
            />
          </View>
          <View style={{alignItems : 'flex-end' , marginTop : windowHeight * 0.02}}>
              <TouchableOpacity style={styles.button}>
                <Text style={[styles.fontSizeFour , styles.textColorWhite]}>Change Password</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardChangePasswordScreen;
