import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import styles from '../../assets/Screens/styles';
import Styled_Button from './Styled_Button';

function HomeScreen(props) {
    return (
        
            <ImageBackground source={require('../../assets/ModelX.jpeg')}
            style={styles.container}
            >
                <View
                style={styles.logoContainer}
                >
                    <Image source={require('../../assets/logo.png')}
                    style={styles.logo}
                    />
                    <Image source={require('../../assets/menu.png')}
                    style={styles.menu}
                    />


                </View >
                <View style={styles.textContainer}>

                    <Text style={styles.headingText}>Tesla Model S</Text>
                    <Text style={styles.subheadingText}>Starting at just $59,429</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Styled_Button type="primary" content="custom order"/>
                    <Styled_Button type = "secondary" content="existing inventory"/>
                </View>





            </ImageBackground>
    );
}

export default HomeScreen;