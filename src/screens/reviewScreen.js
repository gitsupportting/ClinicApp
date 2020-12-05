import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Text, View } from 'native-base';
import Icon from "react-native-feather1s"
import backBtn from '../assets/icons/backBtn.png';
var s = require('../assets/css/styles');

export default class Review extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Container style={s.container}>
        <Header style={s.headerContent}>
          <View style={s.spaceBetween}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{width:15}}
              activeOpacity={1}>
              <Image source={backBtn} style={s.backIcon}/>
            </TouchableOpacity>
            <Text style={s.title}>Review</Text>
            <View style={{width:15}}></View>
          </View>          
        </Header>
        <Content style={s.mainContainer}>
          
        </Content>
        <Footer>
          <FooterTab style={s.footerContent}>            
            <Button onPress={()=>this.props.navigation.navigate('Home')}>
              <Icon name="home" size={30} color={'rgba(37,175,217, 1)'} />
            </Button>
            <Button onPress={()=>this.props.navigation.navigate('Announce')}>
              <Icon name="flag" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
            <Button onPress={()=>this.props.navigation.navigate('Calendar')}>
              <Icon name="calendar" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
            <Button onPress={()=>this.props.navigation.navigate('Chat')}>
              <Icon name="message-circle" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
            <Button onPress={()=>this.props.navigation.navigate('Doc')}>
              <Icon name="info" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
          </FooterTab>
        </Footer>
      </Container >
    );
  }
}
