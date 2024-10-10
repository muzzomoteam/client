import { Text, View, ScrollView } from "react-native";
import React from "react";
import styles from "../../style/styles";

const DashboardReportsScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.bottomBorderTitleContainer}>
          <Text style={styles.fontSizeLarge}>Job Reports</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.reportListItemContainer}>
            <View style={styles.reportListItem}>
              <Text style={styles.fontSizeThree}>Decks & Fences</Text>
              <Text style={styles.fontSizeFour}>Mon, Oct 23, 2023</Text>
            </View>
            <View style={styles.reportListItem}>
              <Text style={styles.fontSizeThree}>Decks & Fences</Text>
              <Text style={styles.fontSizeFour}>Mon, Oct 23, 2023</Text>
            </View>
            <View style={styles.reportListItem}>
              <Text style={styles.fontSizeThree}>Decks & Fences</Text>
              <Text style={styles.fontSizeFour}>Mon, Oct 23, 2023</Text>
            </View>
            <View style={styles.reportListItem}>
              <Text style={styles.fontSizeThree}>Decks & Fences</Text>
              <Text style={styles.fontSizeFour}>Mon, Oct 23, 2023</Text>
            </View>
            <View style={styles.reportListItem}>
              <Text style={styles.fontSizeThree}>Decks & Fences</Text>
              <Text style={styles.fontSizeFour}>Mon, Oct 23, 2023</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardReportsScreen;
