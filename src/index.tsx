import React from 'react'
import { StatusBar, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Animated, { SlideInRight } from 'react-native-reanimated'

import './styles/global.css'

const App: React.FC = () => {
    return (
        <GestureHandlerRootView>
            <View className={'flex-1 items-center justify-center bg-neutral-900'}>
                <StatusBar />
                <Animated.Text
                    entering={SlideInRight.duration(2000).springify().damping(14)}
                    className={'text-red-500 font-bold'}
                >
                    {'Hi lets jump'}
                </Animated.Text>
            </View>
        </GestureHandlerRootView>
    )
}

export default App
