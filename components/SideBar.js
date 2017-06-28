import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  TextInput,
  View
} from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Left, Right, Thumbnail, Body, Text, Button, Icon } from 'native-base';


export default class SideBar extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>

                </Content>
            </Container>
        );
    }
}
