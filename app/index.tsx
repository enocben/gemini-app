import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview"
import Constant from 'expo-constants'
import { StatusBar } from 'expo-status-bar'

export default function Index() {
  return (
      <View style={styles.container}>
      <WebView
        source={{ uri: "https://gemini.google.com" }}
      />
      <StatusBar style="dark" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight
  }
})
