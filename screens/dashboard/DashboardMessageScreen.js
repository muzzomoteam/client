import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "../../style/styles";

const DashboardMessageScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.bottomBorderTitleContainer}>
          <Text style={styles.fontSizeLarge}>Messages</Text>
        </View>
        <View style={styles.bodyContainer}>
          <TouchableOpacity onPress={() => {navigation.navigate('MessageDetail');}}>
            <View style={styles.dashboardMessageScreenMessageContainer}>
              <View style={styles.dashboardMessageScreenProfileContainer}>
                <Image
                  source={require("./../../assets/profile-image.jpg")}
                  style={styles.dashboardMessageScreenProfileImage}
                />
              </View>
              <View style={styles.dashboardMessageScreenMessageTextContainer}>
                <View style={styles.fontSizeThree}>
                  <Text>Ali Tareq Farhadi</Text>
                </View>
                <View
                  style={styles.dashboardMessageScreenMessageAndTimeContainer}
                >
                  <Text style={styles.fontSizeFive}>
                    How are you?
                  </Text>
                  <Text style={styles.fontSizeFive}>
                    8:30 PM
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('MessageDetail');}}>
            <View style={styles.dashboardMessageScreenMessageContainer}>
              <View style={styles.dashboardMessageScreenProfileContainer}>
                <Image
                  source={require("./../../assets/profile-image.jpg")}
                  style={styles.dashboardMessageScreenProfileImage}
                />
              </View>
              <View style={styles.dashboardMessageScreenMessageTextContainer}>
                <View style={styles.fontSizeThree}>
                  <Text>Ali Tareq Farhadi</Text>
                </View>
                <View
                  style={styles.dashboardMessageScreenMessageAndTimeContainer}
                >
                  <Text style={styles.fontSizeFive}>
                    How are you?
                  </Text>
                  <Text style={styles.fontSizeFive}>
                    8:30 PM
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('MessageDetail');}}>
            <View style={styles.dashboardMessageScreenMessageContainer}>
              <View style={styles.dashboardMessageScreenProfileContainer}>
                <Image
                  source={require("./../../assets/profile-image.jpg")}
                  style={styles.dashboardMessageScreenProfileImage}
                />
              </View>
              <View style={styles.dashboardMessageScreenMessageTextContainer}>
                <View style={styles.fontSizeThree}>
                  <Text>Ali Tareq Farhadi</Text>
                </View>
                <View
                  style={styles.dashboardMessageScreenMessageAndTimeContainer}
                >
                  <Text style={styles.fontSizeFive}>
                    How are you?
                  </Text>
                  <Text style={styles.fontSizeFive}>
                    8:30 PM
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('MessageDetail');}}>
            <View style={styles.dashboardMessageScreenMessageContainer}>
              <View style={styles.dashboardMessageScreenProfileContainer}>
                <Image
                  source={require("./../../assets/profile-image.jpg")}
                  style={styles.dashboardMessageScreenProfileImage}
                />
              </View>
              <View style={styles.dashboardMessageScreenMessageTextContainer}>
                <View style={styles.fontSizeThree}>
                  <Text>Ali Tareq Farhadi</Text>
                </View>
                <View
                  style={styles.dashboardMessageScreenMessageAndTimeContainer}
                >
                  <Text style={styles.fontSizeFive}>
                    How are you?
                  </Text>
                  <Text style={styles.fontSizeFive}>
                    8:30 PM
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardMessageScreen;
