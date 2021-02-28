import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from './styles';

function Styled_Button(props) {

    const type = props.type;
    const backgroundColor=type==='primary'?'#171A20CC':'#FFFFFFA6';
    const textColor=type==='#FFFFFF'?'black':'#171A28';
    const content=props.content;
    return (
        <View style={styles.buttonContainer}>

            <Pressable 
            style={[styles.buttonStyles,{backgroundColor}]}
            onPress={()=>{
                console.warn(content +' was pressed')
            }}>
                <Text style={[styles.buttonText,{color:textColor}]}>{content}</Text>
            </Pressable>



        </View>
        
    );
}

export default Styled_Button;