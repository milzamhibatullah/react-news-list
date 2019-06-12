import  React,{ Component } from  'react';

import  {
  View,
  Text,
  Image,
  FlatList,
  RefreshControl,
  TouchableOpacity
} from  'react-native';

export  default class Home  extends Component{

  toogleDrawer=()=>{
    console.log('pressed')
  }

  static navigationOptions =(navigation)=>({
    headerTitle:'News List',
    headerLeft : (
      <TouchableOpacity onPress={()=>navigation.navigation.openDrawer()}>
        <Image  source={{uri  : 'list'}}  style={{width:24,height:24,marginHorizontal:20}}  />
      </TouchableOpacity>
    )
  })
  render(){
    console.log(this)
    return(
      <View style={{flex:1,backgroundColor:'#F5F5F5'}}>
      </View>
    )
  }
}