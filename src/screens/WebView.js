import  React,  { Component } from  'react';
import {
 WebView,
 Text,
 View,
} from 'react-native';

export default class WebView extends Component {
 static navigationOptions = (navigation) =>({
  headerTitle:navigation.getParam('title',0),
 });
 
 render(){
  return(
   <WebView
      source = {{uri:this.props.navigation.getParam('link',1)}}
      style = {{flex:1,marginTop:2}} />
  )
 }
}