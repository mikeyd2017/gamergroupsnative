import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Home from './Components/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container} class="app-container">
      <StatusBar />
      <Home></Home>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
});