import React from 'react';
import {
  Text,
  Image,
  ScrollView,
  View,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Alert,
  StyleSheet,
  StatusBar,
} from 'react-native';

const About = () => {
  // const handlePress = (message) => Alert.alert('Action', message);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome to My Profile</Text>


      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pressable Example</Text>
        <Pressable
          // onPress={() => handlePress('You pressed a Pressable!')}
          style={styles.pressableBox}
        >
          <Text style={styles.buttonText}>Press Me</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TouchableOpacity Example</Text>
        <TouchableOpacity
          // onPress={() => handlePress('You pressed TouchableOpacity!')}
          style={styles.touchableBox}
        >
          <Text style={styles.buttonText}>Tap Me</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TouchableHighlight Example</Text>
        <TouchableHighlight
          // onPress={() => handlePress('You pressed TouchableHighlight!')}
          underlayColor="#ddd"
          style={styles.touchableBox}
        >
          <Text style={styles.buttonText}>Highlight Me</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TouchableWithoutFeedback Example</Text>
        <TouchableWithoutFeedback
          // onPress={() => handlePress('You pressed TouchableWithoutFeedback!')}
        >
          <View style={styles.touchableBox}>
            <Text style={styles.buttonText}>No Feedback Tap</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8ff',
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  
  section: {
    marginBottom: 25,
    paddingTop:50
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#444',
  },
  pressableBox: {
    backgroundColor: '#5DA3FA',
    padding: 15,
    borderRadius: 10,
  },
  touchableBox: {
    backgroundColor: '#A5D6A7',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default About;
