import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container: {
    backgroundColor: "#fff",
  },
  bodyContainer: {
    width: windowWidth * 0.9,
    marginHorizontal: windowWidth * 0.05,
  },
  titleContainer: {
    width: "95%",
    marginHorizontal: "2.5%",
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight * 0.15,
  },
  bottomBorderTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#83c5be",
    borderBottomWidth: 1,
    paddingVertical: windowHeight * 0.015,
    marginTop: windowHeight * 0.06,
  },
  sidebarTitleContainer: {
    borderLeftColor: "#83c5be",
    borderLeftWidth: windowWidth * 0.005,
    marginTop: windowHeight * 0.05,
    paddingLeft: windowWidth * 0.013,
  },
  fontSizeOne: {
    fontSize: windowWidth * 0.05,
  },
  fontSizeTwo: {
    fontSize: windowWidth * 0.04,
  },
  fontSizeThree: {
    fontSize: windowWidth * 0.035,
  },
  fontSizeFour: {
    fontSize: windowWidth * 0.03,
  },
  fontSizeFive: {
    fontSize: windowWidth * 0.027,
  },
  fontSizeSix: {
    fontSize: windowWidth * 0.022,
  },
  fontSizeSeven: {
    fontSize: windowWidth * 0.018,
  },
  fontSizeEight: {
    fontSize: windowWidth * 0.015,
  },
  fontSizeLarge: {
    fontSize: windowWidth * 0.06,
  },
  textAlignOne: {
    textAlign: "center",
  },
  textColorWhite: {
    color: "white",
  },
  textColorMuzzomo: {
    color: "#006d77",
  },
  muzzomoBackgroundColor: {
    backgroundColor: "#006d77",
  },
  lightMuzzomoBackgroundColor: {
    backgroundColor: "#EAFDFF",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: windowWidth * 0.02,
    borderRadius: windowWidth * 0.005,
  },
  searchBarInput: {
    height: windowWidth * 0.12,
    width: windowWidth * 0.8,
    fontSize: windowWidth * 0.05,
  },
  searchBarIcon: {
    marginRight: windowWidth * 0.02,
  },
  buttonContainer: {
    height: windowHeight * 0.15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#006d77",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: windowWidth * 0.1, // Adjust the multiplier as needed
    paddingVertical: windowHeight * 0.015, // Adjust the multiplier as needed
    borderRadius: windowWidth * 0.05,
  },
  buttonTwo: {
    backgroundColor: "#006d77",
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.75, // Adjust the multiplier as needed
    paddingVertical: windowHeight * 0.015, // Adjust the multiplier as needed
    borderRadius: windowWidth * 0.05, // Adjust the multiplier as needed
  },
  buttonThree: {
    backgroundColor: "#006d77",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: windowWidth * 0.05, // Adjust the multiplier as needed
    paddingVertical: windowHeight * 0.015, // Adjust the multiplier as needed
  },
  iconTextInputContainer: {
    width: "100%",
    borderColor: "#b7b7b7",
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: windowWidth * 0.01, // Adjust the multiplier as needed
    marginTop: windowWidth * 0.05, // Adjust the multiplier as needed
  },
  iconTextInput: {
    height: windowWidth * 0.12, // Adjust the multiplier as needed
    fontSize: windowWidth * 0.03, // Adjust the multiplier as needed
  },
  iconTextInputIcon: {
    marginRight: windowWidth * 0.01, // Adjust the multiplier as needed
  },
  textInputContainer: {
    marginTop: windowWidth * 0.04, // Adjust the factor for the desired marginTop
  },
  textInput: {
    width: "100%",
    height: windowWidth * 0.1, // Adjust the factor for the desired height
    borderRadius: windowWidth * 0.02, // Adjust the factor for the desired borderRadius
    borderColor: "#b7b7b7",
    borderWidth: 1,
    fontSize: windowWidth * 0.03, // Adjust the factor for the desired fontSize
    paddingHorizontal: windowWidth * 0.03, // Adjust the factor for the desired paddingHorizontal
  },
  textInputTwo: {
    width: "100%",
    height: windowWidth * 0.1, // Adjust the factor for the desired height
    borderRadius: windowWidth * 0.02, // Adjust the factor for the desired borderRadius
    borderColor: "#b7b7b7",
    borderWidth: 1,
    paddingHorizontal: windowWidth * 0.03, // Adjust the factor for the desired paddingHorizontal
    marginVertical: windowWidth * 0.02, // Adjust the factor for the desired marginVertical
    fontSize: windowWidth * 0.025,
  },
  // Drawer Navigation
  drawerProfileContainer: {
    marginTop: windowHeight * 0.08,
    flexDirection: "row",
    borderBottomColor: "#e9e9e9",
    borderBottomWidth: 1,
    paddingBottom: windowHeight * 0.025,
  },
  drawerProfileImageContainer: {
    width: "40%",
    paddingHorizontal: windowWidth * 0.04,
  },
  drawerProfileImage: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    borderRadius: windowHeight * 0.1,
  },
  drawerProfileInfoContainer: {
    justifyContent: "center",
  },
  drawerItemListContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: "#e9e9e9",
    borderBottomWidth: 1,
  },
  // HomeScreen
  meetMuzzomoTextContainer: {
    paddingHorizontal: windowWidth * 0.06, // Adjust the factor for the desired paddingHorizontal
    alignItems: "center",
    justifyContent: "center",
  },
  jobAcceptedContainer: {
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: "#EAFDFF",
  },
  jobAcceptedCardContainer: {
    margin: windowWidth * 0.1, // Adjust the factor for the desired margin
    padding: windowWidth * 0.05, // Adjust the factor for the desired padding
    backgroundColor: "white",
  },
  jobAcceptedTitleContainer: {
    alignItems: "center",
  },
  jobAcceptedTextBody: {
    marginTop: windowWidth * 0.025, // Adjust the factor for the desired marginTop
    paddingRight: windowWidth * 0.125, // Adjust the factor for the desired paddingRight
  },
  jobAcceptedProfileContainer: {
    flexDirection: "row",
    marginTop: windowWidth * 0.05, // Adjust the factor for the desired marginTop
  },
  jobAcceptedProfileImageContainer: {
    width: "30%",
    alignItems: "center",
  },
  jobAcceptedProfileImage: {
    width: windowWidth * 0.1, // Adjust the factor for the desired width
    height: windowWidth * 0.1, // Adjust the factor for the desired height
    borderRadius: windowWidth * 0.05, // Adjust the factor for the desired borderRadius
    marginRight: windowWidth * 0.025, // Adjust the factor for the desired marginRight
  },
  jobAcceptedProfileNameContainer: {
    justifyContent: "center",
  },
  servicesContainer: {
    flexDirection: "row",
  },
  servicesCard: {
    alignItems: "center",
    width: windowWidth * 0.6, // Adjust the factor for the desired width
    height: windowWidth * 0.5, // Adjust the factor for the desired height
    borderRadius: windowWidth * 0.02, // Adjust the factor for the desired borderRadius
    borderColor: "#b7b7b7",
    borderWidth: 1,
    marginRight: windowWidth * 0.05, // Adjust the factor for the desired marginRight
  },
  servicesCardImage: {
    width: windowWidth * 0.6, // Adjust the factor for the desired width
    height: windowWidth * 0.31, // Adjust the factor for the desired height
    marginBottom: windowWidth * 0.06, // Adjust the factor for the desired marginBottom
    borderTopLeftRadius: windowWidth * 0.02, // Adjust the factor for the desired borderTopLeftRadius
    borderTopRightRadius: windowWidth * 0.02, // Adjust the factor for the desired borderTopRightRadius
  },

  // Services Screen

  servicesScreenCardContainer: {
    flexDirection: "row",
    marginVertical: windowWidth * 0.05, // Adjust the factor for the desired marginVertical
  },
  servicesScreenCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#d7d7d7",
    borderWidth: 1,
    borderRadius: windowWidth * 0.02, // Adjust the factor for the desired borderRadius
    paddingRight: windowWidth * 0.025, // Adjust the factor for the desired paddingRight
    paddingVertical: windowWidth * 0.0125, // Adjust the factor for the desired paddingVertical
    marginRight: windowWidth * 0.025, // Adjust the factor for the desired marginRight
  },
  servicesScreenCardIcon: {
    marginRight: windowWidth * 0.02, // Adjust the factor for the desired marginRight
  },
  servicesScreenListContainer: {
    marginVertical: windowWidth * 0.05, // Adjust the factor for the desired marginVertical
    paddingHorizontal: windowWidth * 0.025, // Adjust the factor for the desired paddingHorizontal
  },
  servicesScreenListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#333333",
    borderBottomWidth: 1,
    paddingHorizontal: windowWidth * 0.0125, // Adjust the factor for the desired paddingHorizontal
    marginVertical: windowWidth * 0.05, // Adjust the factor for the desired marginVertical
  },
  servicesScreenSearchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingHorizontal: windowWidth * 0.02, // Adjust the factor for the desired paddingHorizontal
    borderRadius: windowWidth * 0.005, // Adjust the factor for the desired borderRadius
  },
  servicesScreenSearchBarInput: {
    height: windowWidth * 0.12, // Adjust the factor for the desired height
    width: windowWidth * 0.75, // Adjust the factor for the desired width
    fontSize: windowWidth * 0.04, // Adjust the factor for the desired fontSize
  },
  servicesScreenSearchBarIcon: {
    marginRight: windowWidth * 0.02, // Adjust the factor for the desired marginRight
  },

  // Service Detail Screen

  serviceDetailScreenBannerImageContainer: {
    width: "100%",
    height: windowHeight * 0.3, // Adjust the factor for the desired height
  },
  serviceDetailScreenBannerImage: {
    height: "100%",
    width: "100%",
  },
  serviceDetailScreenTitleContainer: {
    marginVertical: windowWidth * 0.05, // Adjust the factor for the desired marginVertical
  },
  serviceDetailScreenCardsContainer: {
    flexDirection: "row",
  },
  serviceDetailScreenViewCard: {
    paddingHorizontal: windowWidth * 0.025, // Adjust the factor for the desired paddingHorizontal
    paddingVertical: windowWidth * 0.025, // Adjust the factor for the desired paddingVertical
    borderRadius: windowWidth * 0.02, // Adjust the factor for the desired borderRadius
    marginRight: windowWidth * 0.05, // Adjust the factor for the desired marginRight
  },
  serviceDetailScreenCompletedJobCard: {
    paddingHorizontal: windowWidth * 0.04, // Adjust the factor for the desired paddingHorizontal
    paddingVertical: windowWidth * 0.02, // Adjust the factor for the desired paddingVertical
    borderRadius: windowWidth * 0.02, // Adjust the factor for the desired borderRadius
  },
  serviceDetailScreenDescriptionContainer: {
    marginTop: windowWidth * 0.07, // Adjust the factor for the desired marginTop
    padding: windowWidth * 0.12,
  },
  addressContainer: {
    marginTop: windowWidth * 0.05, // Adjust the factor for the desired marginTop
  },

  // Service Submit Payment Screen

  paypalStripContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: windowWidth * 0.05, // Adjust the factor for the desired marginTop
  },
  paypalStripCard: {
    width: "50%",
    marginRight: windowWidth * 0.02, // Adjust the factor for the desired marginRight
  },
  paypalStripImage: {
    width: "100%",
    height: windowWidth * 0.12, // Adjust the factor for the desired height
    borderRadius: windowWidth * 0.01, // Adjust the factor for the desired borderRadius
  },

  // Dashboard Screen
  dashboardScreenCardContainer: {
    marginTop: windowWidth * 0.05,
    backgroundColor: "#eafdff",
    borderRadius: windowWidth * 0.02,
    paddingVertical: windowWidth * 0.1,
    paddingHorizontal: windowWidth * 0.02,
    marginHorizontal: windowWidth * 0.05,
  },
  dashboardScreenCardProfileContainer: {
    flexDirection: "row",
  },
  dashboardScreenProfileImageContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  dashboardScreenProfileImage: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    borderRadius: windowWidth * 0.4,
  },
  dashboardScreenProfileInfo: {
    justifyContent: "center",
  },
  dashboardScreenProfileInfoLocation: {
    flexDirection: "row",
    alignItems: "center",
  },
  dashboardScreenProfileInfoName: {
    marginBottom: 5,
  },
  dashboardScreenProfileInfoLocationIcon: {
    marginRight: 5,
  },
  dashboardScreenMenuContainer: {
    marginTop: 40,
  },
  dashboardScreenMenuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#b7b7b7",
    borderBottomWidth: 1,
    paddingVertical: windowWidth * 0.03,
    marginVertical: windowWidth * 0.03,
  },
  dashboardScreenMenuItemTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dashboardScreenCardsContainer: {
    marginVertical: windowWidth * 0.08,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  dashboardScreenCards: {
    paddingHorizontal: windowWidth * 0.1,
    height: windowHeight * 0.15,
    width: windowWidth * 0.4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: windowWidth * 0.02,
  },

  // Dashboard Job Report Screen
  reportListItemContainer: {
    marginTop: windowWidth * 0.1,
  },
  reportListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: windowWidth * 0.02,
    borderBottomColor: "#b7b7b7",
    borderBottomWidth: 1,
    paddingVertical: windowWidth * 0.02,
  },

  // Dashboard Jobs Screen

  DashboardJobsScreenCardContainer: {
    width: "90%",
    marginHorizontal: "5%",
    paddingVertical: windowWidth * 0.02,
    paddingHorizontal: windowWidth * 0.04,
    borderColor: "#b7b7b7",
    borderWidth: 1,
    marginTop: windowWidth * 0.04,
    borderRadius: windowWidth * 0.01,
  },
  DashboardJobsScreenCard: {
    width: "100%",
    flexDirection: "row",
    borderColor: "#b7b7b7",
    borderWidth: 1,
    marginVertical: windowWidth * 0.01,
  },
  DashboardJobsScreenCardImageContainer: {
    width: "40%",
  },
  DashboardJobsScreenCardImage: {
    width: "100%",
    height: windowHeight * 0.13,
  },
  DashboardJobsScreenCardDetailContainer: {
    marginHorizontal: windowWidth * 0.01,
    width: "60%",
    paddingHorizontal: windowWidth * 0.02,
  },
  DashboardJobsScreenCardTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    top: windowHeight * 0.02,
  },
  DashboardJobsScreenCardInformationContainer: {
    flexDirection: "row",
    top: windowHeight * 0.07,
    justifyContent: "space-between",
  },
  // Dashboard Active Job Detail Screen

  dashboardActiveCompletedJobDetailScreenElementsContainer: {
    marginTop: windowWidth * 0.08,
  },
  dashboardActiveCompletedJobDetailScreenElements: {
    flexDirection: "row",
    paddingHorizontal: windowWidth * 0.03,
    alignItems: "center",
    marginVertical: windowWidth * 0.015,
  },
  dashboardActiveCompletedJobDetailScreenDescriptionContainer: {
    marginRight: windowWidth * 0.06,
  },

  //  Dashboard Completed Job Screen

  dashboardCompletedJobScreenMuzzomoProCard: {
    marginHorizontal: windowWidth * 0.06,
    flexDirection: "row",
    borderColor: "#f9f9f9",
    borderWidth: 1,
    borderRadius: windowWidth * 0.03,
    paddingVertical: windowWidth * 0.04,
    marginTop: windowWidth * 0.05,
  },
  dashboardCompletedJobScreenProfileImageContainer: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  dashboardCompletedJobScreenProfileImage: {
    height: windowWidth * 0.2,
    width: windowWidth * 0.2,
    borderRadius: windowWidth * 0.1,
  },
  dashboardCompletedJobScreenProfileInformationContainer: {
    width: "60%",
    justifyContent: "center",
  },
  dashboardCompletedJobScreenMuzzomoProVerifiedImage: {
    height: windowWidth * 0.045,
    width: windowWidth * 0.045,
    borderRadius: windowWidth * 0.025,
    marginRight: windowWidth * 0.007,
  },
  dashboardCompletedJobScreenMuzzomoProVerifiedContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: windowWidth * 0.012,
  },
  dashboardCompletedJobScreenProfileInformationText: {
    marginVertical: windowWidth * 0.003,
  },
  dashboardCompletedJobScreenFeedbackContainer: {
    marginTop: windowHeight * 0.075,
    width: windowWidth * 0.7,
    marginBottom: windowHeight * 0.125,
    marginLeft: windowWidth * 0.03,
  },
  dashboardCompletedJobScreenFeedbackTextInput: {
    borderColor: "#f0f0f0",
    borderWidth: 1,
    height: windowWidth * 0.3,
    borderRadius: windowWidth * 0.03,
    marginVertical: windowWidth * 0.06,
    paddingLeft: windowWidth * 0.02,
    fontSize: windowWidth * 0.03,
  },
  // Dashboard Message Screen

  dashboardMessageScreenMessageContainer: {
    marginVertical: windowWidth * 0.05,
    flexDirection: "row",
  },
  dashboardMessageScreenProfileContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  dashboardMessageScreenProfileImage: {
    height: windowWidth * 0.2,
    width: windowWidth * 0.2,
    borderRadius: windowWidth * 0.1,
  },
  dashboardMessageScreenMessageTextContainer: {
    justifyContent: "center",
    width: "70%",
    paddingRight: windowWidth * 0.15,
  },
  dashboardMessageScreenMessageAndTimeContainer: {
    flexDirection: "row",
  },
  dashboardMessageScreenessageText: {
    marginRight: windowWidth * 0.03,
  },
  // Dashboard EditProfile Screen

  dashboardEditProfileScreenProfileContainer: {
    marginTop: 10,
    paddingVertical: 20,
    borderColor: "#b7b7b7",
    borderWidth: 1,
    width: "88%",
    marginHorizontal: "6%",
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 40,
  },
  dashboardEditProfileScreenProfileImage: {
    height: windowHeight * 0.2,
    width: windowHeight * 0.2,
    borderRadius: windowHeight * 0.1,
    borderColor: "#f9f9f9",
    borderWidth: 1,
  },
  dashboardEditProfileScreenChageProfileImageIcon: {
    position: "absolute",
    top: windowHeight * 0.17, // 20% down from the top
    right: windowWidth * 0.25, // 35% from the right
  },
  dashboardEditProfileScreenChageProfileImage: {
    height: windowHeight * 0.04, // 4% of the window height
    width: windowHeight * 0.04, // 4% of the window height
    borderRadius: windowHeight * 0.04, // 4% of the window height (for a circle)
  },
  dashboardEditProfileScreenProfileInformationContainer: {
    marginTop: windowHeight * 0.06, // 6% of the window height
    paddingHorizontal: windowWidth * 0.05,
  },
  dashboardEditProfileScreenChangePasswordAndDeleteAccountContainer: {
    marginVertical: windowHeight * 0.02, // 2% of the window height
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dashboardEditProfileScreenUpdateButtonContainer: {
    marginVertical: windowHeight * 0.02,
    alignItems: "flex-end",
  },
  // Dashboard Avaliable Job Screen
  avaliableJobCard: {
    width: "90%",
    marginHorizontal: windowWidth * 0.05, // 5% margin from both sides
    paddingVertical: windowHeight * 0.04, // 4% of the window height
    borderColor: "#b7b7b7",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: windowHeight * 0.04,
  },
  avaliableJobCardTitleContainer: {
    alignItems: "center",
    paddingVertical: windowHeight * 0.02,
  },
  avaliableJobCardDetails: {
    paddingHorizontal: windowWidth * 0.02,
    flexDirection: "row",
    marginVertical: windowHeight * 0.01,
    alignItems: "center",
  },
  // Login and Register Container
  borderContainer: {
    marginVertical: windowHeight * 0.05, // 5% of the window height
    paddingVertical: windowHeight * 0.02, // 2% of the window height
    marginHorizontal: windowWidth * 0.05, // 5% of the window width
    borderColor: "#b7b7b7",
    borderWidth: 1,
    borderRadius: windowHeight * 0.01, // 1% of the window height
  },

  logoImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: windowHeight * 0.04, // 4% of the window height
  },

  logoImage: {
    height: windowHeight * 0.13, // 16% of the window height
    width: windowHeight * 0.13, // 16% of the window height
    borderRadius: windowHeight * 0.08, // 8% of the window height (for a circle)
  },

  // Professional Register Page Three
  textInputContainerPrice: {
    marginVertical: windowHeight * 0.02, // 2% of the window height
  },

  textInputPrice: {
    width: windowWidth * 0.4, // 40% of the window width
    height: windowHeight * 0.05, // 6% of the window height
    borderColor: "#b7b7b7",
    borderWidth: 1,
    borderRadius: windowHeight * 0.02, // 2% of the window height
    fontSize: windowHeight * 0.02, // 2% of the window height
    padding: windowHeight * 0.015, // 1.5% of the window height
  },

  textInputDescriptionContainer: {
    marginVertical: windowHeight * 0.02, // 2% of the window height
  },

  textInputDescription: {
    width: "100%",
    height: windowHeight * 0.15, // 15% of the window height
    borderColor: "#b7b7b7",
    borderWidth: 1,
    borderRadius: windowHeight * 0.02, // 2% of the window height
    fontSize: windowHeight * 0.02, // 2% of the window height
    padding: windowHeight * 0.015, // 1.5% of the window height
  },

  // Dashboard Message Detail Screen
  messageDetailScreenPersonMessageContainer: {
    justifyContent: "flex-start",
    marginVertical: windowHeight * 0.02, // Adjust the multiplier for the desired marginVertical percentage
  },
  messageDetailScreenProfileImageContainer: {
    width: windowWidth * 0.15, // 15% of the window width
    justifyContent: "flex-end",
  },
  messageDetailScreenProfileImage: {
    height: windowHeight * 0.07, // 7% of the window height
    width: windowHeight * 0.07, // 7% of the window height
    borderRadius: windowHeight * 0.035, // Half of the height for a circle
  },
  messageDetailScreenSelfMessageContainer: {
    alignItems: "flex-end",
    marginVertical: windowHeight * 0.02, // Adjust the multiplier for the desired marginVertical percentage
  },
  messageDetailScreenPersonTextMessageContainer: {
    backgroundColor: "#b9e5e1",
    marginRight: windowWidth * 0.2, // 20% of the window width
    borderRadius: windowHeight * 0.02, // 2% of the window height
    paddingVertical: windowHeight * 0.003, // 4% of the window height
    paddingHorizontal: windowWidth * 0.02, // 1% of the window width
    justifyContent: "center",
    alignItems: "center",
  },
  messageDetailScreenSelfTextMessageContainer: {
    backgroundColor: "#8BD3E6",
    marginLeft: windowWidth * 0.2, // 20% of the window width
    borderRadius: windowHeight * 0.02,
    paddingVertical: windowHeight * 0.003,
    paddingHorizontal: windowWidth * 0.02,
    marginRight: windowWidth * 0.005,
    justifyContent: "center",
    alignItems: "center",
  },
  messageDetailScreenTextInputPartContainer: {
    alignItems: "flex-end",
  },
  messageDetailScreenTextInputPartContainer: {
    height: windowHeight * 0.1, // 10% of the window height
    flexDirection: "row",
    alignItems: "center",
    borderTopColor: "#b7b7b7",
    borderTopWidth: 1,
    backgroundColor: "white",
    paddingHorizontal: windowWidth * 0.03,
    paddingVertical: windowHeight * 0.05,
    justifyContent: "space-between",
  },

  messageDetailScreenTextInput: {
    height: windowHeight * 0.06, // 10% of the window height
    width: "82%", // 85% of the window width
    borderColor: "#b7b7b7",
    borderWidth: 1,
    borderRadius: windowHeight * 0.04, // 4% of the window height
    fontSize: windowHeight * 0.018, // 1.8% of the window height
    paddingHorizontal: windowWidth * 0.04, // 4% of the window width
    paddingVertical: windowHeight * 0.01, // 2% of the window height
  },

  messageDetailScreenSendButton: {
    height: windowHeight * 0.06, // 10% of the window height
    width: windowHeight * 0.06, // 10% of the window height (for a square button)
    backgroundColor: "#006d77",
    borderRadius: windowHeight * 0.05, // 5% of the window height (for a circle)
    alignItems: "center",
    justifyContent: "center",
    marginLeft: windowWidth * 0.007, // 1% of the window width
  },
});

export default styles;
