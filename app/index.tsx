import { Link } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/auth.style.js";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Link href="/notification">
        <Text>Go to Notifications</Text>
      </Link>
      <TouchableOpacity onPress={()=>alert("CLICKED")}>
        <Text>Click me</Text>
      </TouchableOpacity>
      <Image source={require("../assets/images/icon.png")} style={{width: 100, height: 100}}/>
      <Image source={{ uri: "https://images.pexels.com/photos/31445409/pexels-photo-31445409.jpeg" }} style={{width: 100, height: 100}}/>
    </View>
  );
}
