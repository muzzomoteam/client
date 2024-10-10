import {
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions
} from "react-native";
import React from "react";
import styles from "../style/styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProRegisterThreeScreen = ({navigation , route}) => {

  const {userID , phoneNumber , insuranceCoverage , licenseNumber} = route.params;
  
  console.log(userID , phoneNumber , insuranceCoverage , licenseNumber);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.borderContainer}>
        <View style={styles.logoImageContainer}>
          <Image
            source={require("./../assets/muzzomo-logo.jpg")}
            style={styles.logoImage}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: windowHeight * 0.04 }}>
          <Text style={styles.fontSizeOne}>
            Become a Muzzomo Professional
          </Text>
        </View>
        <View style={{ paddingHorizontal: windowWidth * 0.04, marginTop: windowHeight * 0.04 }}>
          <View style={styles.textInputContainer}>
            <View style={{ flexDirection: "row" , alignItems : 'center' }}>
              <Ionicons
                name="md-mail"
                size={windowWidth * 0.05}
                color={"#000"}
                style={{ marginRight: windowWidth * 0.01 }}
              />
              <Text style={styles.fontSizeFour}>Service Category</Text>
            </View>
            <TextInput style={[styles.textInput, { marginTop: windowHeight * 0.01 }]} />
          </View>
          <View style={styles.textInputContainer}>
            <View style={{ flexDirection: "row", alignItems: 'center'  }}>
              <Ionicons
                name="md-mail"
                size={windowWidth * 0.05}
                color={"#000"}
                style={{ marginRight: windowWidth * 0.01 }}
              />
              <Text style={styles.fontSizeFour}>Service Type</Text>
            </View>
            <TextInput style={[styles.textInput, { marginTop: windowHeight * 0.01 }]} />
          </View>
          <View style={styles.textInputContainerPrice}>
            <View style={{ flexDirection: "row", alignItems: 'center'  }}>
              <Ionicons
                name="md-cash"
                size={windowWidth * 0.05}
                color={"#000"}
                style={{ marginRight: windowWidth * 0.01 }}
              />
              <Text style={styles.fontSizeFour}>Price</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: 'center'  }}>
              <TextInput
                style={[styles.textInputPrice, { marginTop: windowHeight * 0.01 }]}
                placeholder="0"
              />
              <View
                style={{
                  width: "40%",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: windowWidth * 0.04,
                }}
              >
                <Text style={styles.fontSizeThree}>Total Cost: {60}$</Text>
              </View>
            </View>
          </View>
          <View style={styles.textInputDescriptionContainer}>
            <View style={{ flexDirection: "row" , alignItems: 'center' }}>
              <Ionicons
                name="document-text-outline"
                size={windowWidth * 0.05}
                color={"#000"}
                style={{ marginRight: windowWidth * 0.01 }}
              />
              <Text style={styles.fontSizeFour}>Description</Text>
            </View>
            <TextInput
              style={[styles.textInputDescription, { marginTop: windowHeight * 0.01 }]}
              multiline
              numberOfLines={4}
            />
          </View>
          <View style={{ marginTop: windowHeight * 0.02 }}>
            <TouchableOpacity style={[styles.button]}>
              <Text style={[styles.fontSizeFour, styles.textColorWhite]}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProRegisterThreeScreen;
