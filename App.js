import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  TextInput,
  View
} from 'react-native';
import getTheme from './native-base-theme/components';   
import MainDrawer from './components/Drawer';


export default class ReactNativeProject extends Component {
    render() {
        return (
          <StyleProvider  style={getTheme()}>    
              <Container>
                  <Header>
                      <Left>
                          <Button transparent onPress={()=> console.log(MainDrawer)}>
                              <Icon name='menu' />
                          </Button>
                      </Left>
                      <Body>
                          <Title>අන්තර්ජාල නැබ</Title>
                      </Body>
                      <Right />
                  </Header>
    
                  <Content>
    
                     <Card>
                         <CardItem bordered>
                             <Left>
                                 <Thumbnail />
                                 <Body>
                                   <Text>දිවයින </Text>
                                   <Text note>Jun 27, 2017</Text>
                                 </Body>
                             </Left>
                         </CardItem>
    
                         <CardItem>
                             <Body>
                                 <Image style={{  resizeMode: 'cover' }} source={require('./img/දිවයින.jpg')} />
                                 <Button transparent textStyle={{color: '#87838B'}}>
                                     <Text>1,926 views</Text>
                                 </Button>
                             </Body>
                         </CardItem>
                    </Card>
                    <Card>
                      <CardItem bordered>
                          <Left>
                              <Thumbnail />
                              <Body>
                                <Text>ලංකාදීප</Text>
                                <Text note>Jun 27, 2017</Text>
                              </Body>
                          </Left>
                      </CardItem>
    
                      <CardItem>
                          <Body>
                              <Image style={{  resizeMode: 'cover' }} source={require('./img/ලංකාදීප.jpg')} />
                              <Button transparent textStyle={{color: '#87838B'}}>
                                  <Text>1,926 views</Text>
                              </Button>
                          </Body>
                      </CardItem>
                    </Card>
                  </Content>
              </Container>
            </StyleProvider>
        );
    }
}
