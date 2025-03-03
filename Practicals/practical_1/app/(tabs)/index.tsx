import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  Dimensions 
} from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const slides = [
  {
    image: require("@/assets/images/image.png"), // Replace with actual images
    title: "Get going with us",
    description: "Use GoCar to get across town – from anywhere, at any time.",
  },
  {
    image: require("@/assets/images/image2.png"),
    title: "Welcome to Gojek!",
    description: "We're your go-to app for hassle-free commutes.",
  },
  {
    image: require("@/assets/images/image3.png"),
    title: "Rides for all",
    description: "Up to three stops with every trip - perfect for travel with friends and family.",
  },
];

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      {/* Header with Logo and Language Button */}
      <View style={styles.header}>
        <Image 
          source={require("@/assets/images/gojek.png")} // Replace with actual logo
          style={styles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.languageButton}>
          <Image 
            source={require("@/assets/images/image2.png")} // Replace with actual icon
            style={styles.languageIcon}
            resizeMode="contain"
          />
          <Text style={styles.languageText}>English</Text>
        </TouchableOpacity>
      </View>

      {/* Swiper for Onboarding Screens */}
      <Swiper loop={false} dot={<View style={styles.dot} />} activeDot={<View style={[styles.dot, styles.activeDot]} />} paginationStyle={{ bottom: 25 }}>
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <Image source={slide.image} style={styles.illustration} resizeMode="contain" />
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.description}>{slide.description}</Text>
          </View>
        ))}
      </Swiper>

      {/* Buttons */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupText}>I'm new, sign me up</Text>
      </TouchableOpacity>

      {/* Terms & Privacy */}
      <Text style={styles.termsText}>
        By logging in or registering, you agree to our{" "}
        <Text style={styles.linkText}>Terms of service</Text> and{" "}
        <Text style={styles.linkText}>Privacy policy</Text>.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 50,
    left: 5,
    right: 20,
  },
  logo: {
    width: 120, 
    height: 50,
  },
  languageButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  languageIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  languageText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
  },
  illustration: {
    width: width * 0.9,
    height: 220,
    marginTop: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
    textAlign: "center",
    color: "#555",
    marginHorizontal: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#008000",
  },
  loginButton: {
    backgroundColor: "#008000",
    width: "85%",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 10,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupButton: {
    borderColor: "#008000",
    borderWidth: 1,
    width: "85%",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  signupText: {
    color: "#008000",
    fontSize: 16,
    fontWeight: "bold",
  },
  termsText: {
    fontSize: 9,
    color: "#777",
    textAlign: "left",
    marginTop: 10,
    paddingHorizontal: 30,
  },
  linkText: {
    color: "#008000",
    fontWeight: "bold",
  },
});
