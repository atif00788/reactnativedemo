/**
 * Demo React native app
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';



const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.title}>BARVIDA</Text>
              <Text style={styles.sectionTitle}>Settings</Text>
              <View style={styles.divider}></View>
              <Text style={styles.sectionList}>WI-FI</Text>
              <Text style={styles.sectionList}>Bluetooth</Text>
              <Text style={styles.sectionList}>Flight Mode</Text>
              <Text style={styles.sectionList}>Hotspot</Text>
              <Text style={styles.sectionList}>Network</Text>
              <View style={styles.divider}></View>
              <Text style={styles.sectionList}>Sound</Text>
              <Text style={styles.sectionList}>Alarm</Text>
              <Text style={styles.sectionList}>Do Not Disturb</Text>
              <View style={styles.divider}></View>
              <Text style={styles.sectionList}>Clock</Text>
              <Text style={styles.sectionList}>Display</Text>
              <Text style={styles.sectionList}>Security</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

// Using Style elements to design UI
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  divider: {
    backgroundColor: 'lightgrey',
    padding: 16,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 16,
   backgroundColor: 'white',

  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: 'black',
    padding: 5,
    backgroundColor: 'lightgrey',
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: 'black',
    padding: 5,
    backgroundColor: 'white',
  },
  sectionList: {
    marginTop: 8,
    paddingLeft: 5,
    fontSize: 24,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },

});

export default App;
