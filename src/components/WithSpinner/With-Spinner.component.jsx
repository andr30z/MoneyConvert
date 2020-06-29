import React from 'react'
import { View, Dimensions } from 'react-native';

import { useApi } from '../../contexts/Api.context';

import BackgroundSvg from '../BackgroungSvg/BackgroundSvg.component';
import Loading from '../Loading/Loading.component';

export const BackgroundWithSpinner = (WrappedComponent) => {
    const { width } = Dimensions.get('window');

    const spinnerBackground = () => {
        const { state: { currencies } } = useApi();
        return (
            <View style={{ flex: 1,  alignItems: 'center', backgroundColor: '#7040CF' }}>
                <View
                    style={{ flex: 1, width: width, zIndex: 1 }}>
                    {
                        !currencies.base ? (<Loading />) : (<WrappedComponent />)
                    }

                </View>
                {/* <Svg
                    style={{ position: 'absolute', bottom: 0 }}
                    width={`${width}`}
                    height={`${height * 0.8}`}
                >
                    <Path
                        fill="#6434C3"
                        d="M0 214.5v-26c55-75 84.5-100.5 148-111 91.095-15.063 122.5 111 185.5 85 66.046-27.257 73.5-89.5 93-114s82-48 104.5-48v815H0v-601z"
                    ></Path>
                </Svg> */}
                <BackgroundSvg />

            </View>
        )

    }
    return spinnerBackground;
}


