import React from 'react';
import { FlatList, View, Text, Dimensions } from 'react-native';

import styles from './styles';
import cars from './cars';
import CarItem from '/home/jaisal-tech/RN-Dev/TeslaClone/App/assets/Screens/carItem';

function CarsList(props) {
    //console.warn(cars)
    return (
        
        
        <View style={styles.container}>
            <FlatList
            data={cars}
            renderItem={({item})=> <CarItem car={item}/>}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}

            />
        </View>
    );
}

export default CarsList;