import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Picker, Button, TouchableOpacity } from 'react-native';
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
        this.setState({
          dataSource: responseJson.rates || [],
          isLoading: false
        })
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


    if (!this.state.isLoading) {
      console.log('Ja carregou')
      Object.entries(this.state.dataSource).map(([key, value]) => console.log(key, value))

      return (
        <View style={style.container}>
          <View>
            Object.entries({this.state.dataSource}).map(([key, value]) =>
          <TouchableOpacity
              style={style.list}
              key={key}
          >
              <Text> {value} </Text>
          </TouchableOpacity>

          </View>
        </View >
      );
    } else {
      console.log('aaaaa1')
      return (
        <View style={style.container}>
          <View style={style.viewInit}>
            <ActivityIndicator />
          </View>
        </View>
      );
    }


  }

}

const style = StyleSheet.create({
  viewInit: {
    fontSize: 14,
    color: 'red'
  },
  container: {
    flex: 1,
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

