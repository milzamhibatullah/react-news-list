import  React,{ Component } from  'react';
import axios from 'axios';
import  {
  View,
  Text,
  Image,
  FlatList,
  Alert,
  RefreshControl,
  TouchableOpacity
} from  'react-native';

export  default class Home  extends Component{

  state={
    news : [],
    isRefreshing:true,
  }

  componentDidMount(){
    this.onRefresh();
  }
  static navigationOptions =(navigation)=>({
    headerTitle:'News List',
    headerLeft : (
      <TouchableOpacity onPress={()=>navigation.navigation.openDrawer()}>
        <Image  source={{uri  : 'list'}}  style={{width:24,height:24,marginHorizontal:20}}  />
      </TouchableOpacity>
    )
  })

  onRefresh(){
    this.setState({
      isRefreshing:true
    });
    this.fetchData();
  }

  fetchData(){
    axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=d641f36aa8b7450cb3ebe7fbc1e69917')
    .then(res=>{
      console.log(res);
      if(res.data.status=='ok'){
        this.setState({
          news : res.data.articles,
          isRefreshing:false
        });
        console.log(this.state.news)
      }else{
        Alert.alert('no data ');
        this.setState({
          isRefreshing:false
        });
      }
    })
    .catch(err=>console.log(err));
  }

  renderItem  =(item,index)=> {
    return(
      <View style={{backgroundColor:'white',padding:20,marginBottom:2}}>
          <Text>{item.title}</Text>
      </View>
    )
  }
  render(){
    console.log(this)
    return(
      <View style={{flex:1,backgroundColor:'#F5F5F5'}}>
        <FlatList 
          data={this.state.news}
          extraData={this.state}
          renderItem={({item,index})=>this.renderItem(item,index)}
          refreshControl={
            <RefreshControl
           refreshing={this.state.isRefreshing}
           onRefresh={this.onRefresh.bind(this)}
            />
        }
        />
      </View>
    )
  }
}