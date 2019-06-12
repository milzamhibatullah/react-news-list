import React, {Component} from 'react';
import {  createStackNavigator, createAppContainer, createDrawerNavigator  } from  'react-navigation';
import  HomeScreen  from  './src/screens/Home';

const AppNavigator = createDrawerNavigator({
  Home: createStackNavigator({
    menu1:HomeScreen
  }),
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