import React from 'react';
import { Container, Header, Footer, FooterTab, Button, Text, Content } from 'native-base';
import { View, TouchableOpacity, StyleSheet, BackHandler, Dimensions, ImageBackground } from 'react-native';
import Icon from "react-native-feather1s"
import { FlatGrid } from 'react-native-super-grid';
let deviceWidth = Dimensions.get('window').width;
var s = require('../assets/css/styles');
var clinicInfo = require('../config/ClinicInfo.json');

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [ 'Forms','Tips', 'Articles', 'Specials', 'Contact The Office', 'Review', 'For Kids', 'Finance']
    }
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick = () => {
    // this.props.navigation.goBack(null);
    return true;
  };

  onCheckIn =()=> {
    this.props.navigation.navigate('CheckedIn', {});
  }

  onHome =()=> {
    this.props.navigation.navigate('Home', {});
  }

  onAnnounce =()=> {
    this.props.navigation.navigate('Announce', {});
  }

  onCalendar =()=> {
    this.props.navigation.navigate('Calendar', {});
  }

  onChat =()=> {
    this.props.navigation.navigate('Chat', {});
  }

  onDoc =()=> {
    this.props.navigation.navigate('Doc', {});
  }

  onProfile =()=> {
    this.props.navigation.navigate('ProfileDetail')
  }

  renderItem = (data) => {
    return (
      <View>
        {data.item === 'Forms' &&
          <ImageBackground style={ styles.imgBackground } 
              resizeMode='cover' 
              source={require('../assets/images/home1.png')}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Forms')} style={{width: '100%', height: '100%', minHeight: deviceWidth*0.4, flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
              <Text style={[s.ft20BoldWhite]}>{data.item}</Text>
            </TouchableOpacity>
          </ImageBackground>     
        }
        {data.item === 'Tips' &&
          <ImageBackground style={ styles.imgBackground } 
              resizeMode='cover' 
              source={require('../assets/images/home2.png')}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Tips')} style={{width: '100%', height: '100%', minHeight: deviceWidth*0.4, flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
              <Text style={[s.ft20BoldWhite]}>{data.item}</Text>
            </TouchableOpacity>
          </ImageBackground>     
        }
        {data.item === 'Articles' &&
          <ImageBackground style={ styles.imgBackground } 
              resizeMode='cover' 
              source={require('../assets/images/home3.png')}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Articles')} style={{width: '100%', height: '100%', minHeight: deviceWidth*0.4, flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
              <Text style={[s.ft20BoldWhite]}>{data.item}</Text>
            </TouchableOpacity>
          </ImageBackground>     
        }
        {data.item === 'Specials' &&
          <ImageBackground style={ styles.imgBackground } 
              resizeMode='cover' 
              source={require('../assets/images/home4.png')}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Specials')} style={{width: '100%', height: '100%', minHeight: deviceWidth*0.4, flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
              <Text style={[s.ft20BoldWhite]}>{data.item}</Text>
            </TouchableOpacity>
          </ImageBackground>     
        }
        {data.item === 'Contact The Office' &&
          <ImageBackground style={ styles.imgBackground } 
              resizeMode='cover' 
              source={require('../assets/images/home5.png')}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Contact')} style={{width: '100%', height: '100%', minHeight: deviceWidth*0.4, flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
              <Text style={[s.ft20BoldWhite]}>{data.item}</Text>
            </TouchableOpacity>
          </ImageBackground>     
        }
        {data.item === 'Review' &&
          <ImageBackground style={ styles.imgBackground } 
              resizeMode='cover' 
              source={require('../assets/images/home6.png')}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Review')} style={{width: '100%', height: '100%', minHeight: deviceWidth*0.4, flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
              <Text style={[s.ft20BoldWhite]}>{data.item}</Text>
            </TouchableOpacity>
          </ImageBackground>     
        }
        {data.item === 'For Kids' &&
          <ImageBackground style={ styles.imgBackground } 
              resizeMode='cover' 
              source={require('../assets/images/home7.png')}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Kids')} style={{width: '100%', height: '100%', minHeight: deviceWidth*0.4, flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
              <Text style={[s.ft20BoldWhite]}>{data.item}</Text>
            </TouchableOpacity>
          </ImageBackground>     
        }
        {data.item === 'Finance' &&
          <ImageBackground style={ styles.imgBackground } 
              resizeMode='cover' 
              source={require('../assets/images/home8.png')}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Finance')} style={{width: '100%', height: '100%', minHeight: deviceWidth*0.4, flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
              <Text style={[s.ft20BoldWhite]}>{data.item}</Text>
            </TouchableOpacity>
          </ImageBackground>     
        }
      </View>
       
    )
  }

  render() {
    return (
      <Container style={s.container}>
        <Header style={s.headerContent}>
          <View style={s.spaceBetween}>
            <TouchableOpacity
              style={s.checkIn}
              onPress={()=>this.onCheckIn()}
              activeOpacity={1}>
              <Text style={s.ft15RegularBlack}>Check-In</Text>
            </TouchableOpacity>
            <Text style={s.title}>{clinicInfo.clinic_name}</Text>
            <Button onPress={this.onProfile} style={s.checkInEm, {backgroundColor: "#FFFFFF"}}>
              <Icon name="user" size={30} />
            </Button>
          </View>      
        </Header>
         <Content style={s.mainContainer}>
          <FlatGrid
            itemDimension={deviceWidth*0.4}
            data={this.state.list}
            renderItem={(item) => this.renderItem(item)}
          />
        </Content>
        <Footer>
          <FooterTab style={s.footerContent}>            
            <Button onPress={this.onHome}>
              <Icon name="home" size={30} color={'rgba(37,175,217, 1)'} />
            </Button>
            <Button onPress={this.onAnnounce}>
              <Icon name="flag" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
            <Button onPress={this.onCalendar}>
              <Icon name="calendar" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
            <Button onPress={this.onChat}>
              <Icon name="message-circle" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
            <Button onPress={this.onDoc}>
              <Icon name="info" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
})
