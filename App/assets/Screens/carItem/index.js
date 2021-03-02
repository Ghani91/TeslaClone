import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import styles from './styles';
import Styled_Button from '/home/jaisal-tech/RN-Dev/TeslaClone/App/assets/Screens/styledButton/Styled_Button';

function CarItem(props) {


    const {name, tagline,taglineCTA, image} = props.car;
    return (
        
            <ImageBackground source={image}
            style={styles.container}
            >
                <View
                style={styles.logoContainer}
                >
                    <Image source={require('/home/jaisal-tech/RN-Dev/TeslaClone/App/assets/logo.png')}
                    style={styles.logo}
                    />
                    <Image source={require('/home/jaisal-tech/RN-Dev/TeslaClone/App/assets/menu.png')}
                    style={styles.menu}
                    />


                </View >
                <View style={styles.textContainer}>

                    <Text style={styles.headingText}>{name}</Text>
                    <Text style={styles.subheadingText}>
                        {tagline}
                        <Text style={styles.subtitleCTA}>
                            {taglineCTA}
                            </Text> 
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Styled_Button type="primary" content="custom order"/>
                    <Styled_Button type = "secondary" content="existing inventory"/>
                </View>





            </ImageBackground>
    );
}

export default  CarItem;