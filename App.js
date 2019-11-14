


import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ListItem, Icon  } from "react-native-elements";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      Settings: [
        {name:"Wi-Fi",
         icon: "wifi"},
        {name:"Bluetooth",
        icon: "bluetooth"},
        {name:"FlightMode",
        icon: "airplanemode-active"},
        {name:"Hotspot",
        icon: "wifi-tethering"},
        {name:"Network",
        icon: "signal-cellular-4-bar"},
        {name:"Sound",
        icon: "volume-up"},
        {name:"Alarm",
        icon: "alarm"},
        {name:"Do Not disturb",
        icon: "do-not-disturb"},
        {name:"Clock",
        icon: "watch-later"},
        {name:"Display",
        icon: "video-label"},
        {name:"Security",
        icon: "lock"}
      ]
    };
  }

  
  


  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "88%",
          backgroundColor: "#CED0CE",
          marginLeft: "12%"
        }}
      />
    );
  };
  renderHeader = () => {
    return <Text style={styles.title} >Settings</Text>
    ;
  };

  

  render() {
    return (
      
        <FlatList
        
          data={this.state.Settings}
          renderItem={({ item }) => (
            <ListItem
              
              title={item.name}
              leftIcon={{ name: item.icon }}

              
            />
          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}

         
        />
     
    );
  }
}

const styles = StyleSheet.create({
  
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: 'black',
    padding: 5,
    backgroundColor: 'lightgrey',
  }
});


