import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    View,
    Platform, 
    Image} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import styles from '../../assets/styles/boxItem';
import {UNKNOWN} from '../../assets/img';

class Item extends Component {

    render() {
        const {thumbnail, onPress} = this.props;
        let thumbUri = UNKNOWN;
        if (thumbnail !== null) {
            console.log(thumbnail);
            thumbUri = {
                uri: Platform.OS === 'android'
                    ? `file://${thumbnail}`
                    : thumbnail
            };
        }
        console.log(thumbUri);
        return (
            <TouchableHighlight onPress={onPress}>
                <View style={styles.box}>
                    <Image source={thumbUri}
                        // style={{width:"138",height:"138"}}
                    />
                    {/* <ResponsiveImage
                        source={thumbUri}
                        initWidth="138"
                        initHeight="138"
                    /> */}
                </View>
            </TouchableHighlight>
        );
    }
}

export default Item;
