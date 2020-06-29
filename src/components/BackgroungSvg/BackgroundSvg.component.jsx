import React, { useEffect, useRef } from 'react'
import { View, Dimensions, Animated } from 'react-native'
import BackgroundWaveSvg from '../../../assets/wavy.svg';
const BackgroundSvg = () => {
    const { height, width } = Dimensions.get('window');
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0


    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 7000,
            }
        ).start();
    }, []);


    return (
        <Animated.View style={{ opacity: fadeAnim, position: 'absolute', bottom: -10, }}>
            <BackgroundWaveSvg
                width={`${width}`}
                height={`${height * 0.8}`}
            />
        </Animated.View>
    )
}

export default BackgroundSvg;
