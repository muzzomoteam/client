import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import React from "react";
import styles from "../../style/styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DashboardMessageDetailScreen = () => {
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.bodyContainer}>
            <View
              style={[
                styles.messageDetailScreenContainerBody,
                { marginTop: windowHeight * 0.01 },
              ]}
            >
              <View style={styles.messageDetailScreenPersonMessageContainer}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.messageDetailScreenProfileImageContainer}>
                    <Image
                      source={require("./../../assets/profile-image.jpg")}
                      style={styles.messageDetailScreenProfileImage}
                    />
                  </View>
                  <View
                    style={styles.messageDetailScreenPersonTextMessageContainer}
                  >
                    <Text style={[styles.fontSizeFive]}>
                      I am fine and you? I am fine and you? I am fine and you? I
                      am fine and you?
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.messageDetailScreenSelfMessageContainer}>
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={styles.messageDetailScreenSelfTextMessageContainer}
                  >
                    <Text style={styles.fontSizeFive}>I am fine and you?</Text>
                  </View>
                  <View style={styles.messageDetailScreenProfileImageContainer}>
                    <Image
                      source={require("./../../assets/profile-image.jpg")}
                      style={styles.messageDetailScreenProfileImage}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.messageDetailScreenPersonMessageContainer}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.messageDetailScreenProfileImageContainer}>
                    <Image
                      source={require("./../../assets/profile-image.jpg")}
                      style={styles.messageDetailScreenProfileImage}
                    />
                  </View>
                  <View
                    style={styles.messageDetailScreenPersonTextMessageContainer}
                  >
                    <Text style={[styles.fontSizeFive]}>
                      I am fine and you? I am fine and you? I am fine and you? I
                      am fine and you?
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.messageDetailScreenSelfMessageContainer}>
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={styles.messageDetailScreenSelfTextMessageContainer}
                  >
                    <Text style={styles.fontSizeFive}>I am fine and you?</Text>
                  </View>
                  <View style={styles.messageDetailScreenProfileImageContainer}>
                    <Image
                      source={require("./../../assets/profile-image.jpg")}
                      style={styles.messageDetailScreenProfileImage}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.messageDetailScreenTextInputPartContainer}>
        <TextInput
          style={styles.messageDetailScreenTextInput}
          placeholder="Write message"
        />
        <TouchableOpacity style={styles.messageDetailScreenSendButton}>
          <Ionicons
            name="send"
            size={windowWidth * 0.05}
            color={"#fff"}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DashboardMessageDetailScreen;
