import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, ActivityIndicator, Picker, Button, TouchableOpacity } from 'react-native';
// import ConvertCnt from '../controller/ConvertController';


export default class ConvertScreen extends Component {
  state = {
    isLoading: true,
    dataSource: []
  }

  loadData = () => {
    let i = 0;
    fetch("https://api.exchangeratesapi.io/latest?base=USD")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(i + 1)

        if (responseJson) {
          this.setState({
            dataSource: responseJson.rates,
            isLoading: false
          })
        }
      })
      .catch((error) => {
        return error
      })
  }
  //API
  componentDidMount() {
    this.loadData();
  }
  render() {
    const { dataSource } = this.state;
    return (
      <View style={style.container}>

        <View >
          {
            Object.entries(dataSource).map(([key, value]) => {

              return (
                <View key={key}>
                  <Text>{key} {value}</Text>
                </View>
              )

            })
          }
        </View>
      </View>
    );


  }

}

const style = StyleSheet.create({
  viewInit: {
    fontSize: 14,
    color: 'red'
  },
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginTop: 10,
    justifyContent: 'center'
  },
});

