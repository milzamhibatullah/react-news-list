import React, {Component} from 'react';
import {  createStackNavigator, createAppContainer, createDrawerNavigator  } from  'react-navigation';
import  HomeScreen  from  './src/screens/Home';
import ReadNews from './src/screens/WebView';
const AppNavigator = createDrawerNavigator({
  Home: createStackNavigator({
    menu1:HomeScreen
  }),
  ReadNews
}
,
{
  initialRouteName  : 'Home',
  headerMode:'screen'
}
);

const AppContainer = createAppContainer(AppNavigator);
export  default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}