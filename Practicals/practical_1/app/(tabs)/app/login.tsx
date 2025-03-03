// import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from "react-native";
// import { useRouter } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";

// export default function LoginScreen() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.languageButton}>
//           <Text style={styles.languageText}>🌍 English</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Title */}
//       <Text style={styles.title}>Welcome to Gojek!</Text>
//       <Text style={styles.subtitle}>Enter or create an account in a few easy steps.</Text>

//       {/* Phone Input */}
//       <Text style={styles.label}>Phone number*</Text>
//       <View style={styles.inputContainer}>
//         <Text style={styles.countryCode}>+65</Text>
//         <TextInput placeholder="Enter phone number" keyboardType="phone-pad" style={styles.input} />
//       </View>

//       {/* Continue Button */}
//       <TouchableOpacity style={styles.continueButton} onPress={() => router.push("/verify")}>
//         <Text style={styles.continueText}>Continue</Text>
//       </TouchableOpacity>

//       {/* Terms & Privacy */}
//       <Text style={styles.termsText}>
//         I agree to Gojek’s <Text style={styles.linkText}>Terms of Service</Text> & <Text style={styles.linkText}>Privacy Policy</Text>.
//       </Text>

//       {/* Issue Button */}
//       <TouchableOpacity>
//         <Text style={styles.issueText}>Issue with number?</Text>
//       </TouchableOpacity>

//       {/* Footer Logo */}
//       <Text style={styles.footerText}>from <Text style={styles.footerLogo}>goto</Text></Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: 20,
//     justifyContent: "center",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     position: "absolute",
//     top: 50,
//     left: 20,
//     right: 20,
//   },
//   backButton: {
//     padding: 10,
//   },
//   languageButton: {
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     backgroundColor: "#f5f5f5",
//     borderRadius: 15,
//   },
//   languageText: {
//     fontSize: 14,
//     fontWeight: "600",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: "#555",
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: "600",
//     marginBottom: 5,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     height: 50,
//     marginBottom: 20,
//   },
//   countryCode: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//   },
//   continueButton: {
//     backgroundColor: "#008000",
//     padding: 15,
//     borderRadius: 8,
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   continueText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   termsText: {
//     fontSize: 12,
//     color: "#777",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   linkText: {
//     color: "#008000",
//     fontWeight: "bold",
//   },
//   issueText: {
//     fontSize: 14,
//     color: "#008000",
//     fontWeight: "600",
//     textAlign: "center",
//     marginBottom: 30,
//   },
//   footerText: {
//     textAlign: "center",
//     fontSize: 12,
//     color: "#777",
//   },
//   footerLogo: {
//     fontWeight: "bold",
//     color: "#008000",
//   },
// });
