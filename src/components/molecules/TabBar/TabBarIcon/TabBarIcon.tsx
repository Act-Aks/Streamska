import { useTheme } from '@react-navigation/native'
import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

import { getTabBarIconFromTabName, TabBarIconProps } from './TabBarIcon.static'

export const TabBarIcon: React.FC<TabBarIconProps> = ({ routeName, focused }) => {
    const { colors } = useTheme()
    const iconSize = 24
    const scale = useSharedValue(1)
    const IconComponent = getTabBarIconFromTabName(routeName)

    useEffect(() => {
        scale.value = withSpring(focused ? 1.2 : 1, { damping: 10, stiffness: 100 })
    }, [focused, scale])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        }
    })

    return (
        <Animated.View className={'flex flex-1 items-center justify-center'} style={animatedStyle}>
            <IconComponent color={focused ? colors.primary : colors.text} size={iconSize} />
        </Animated.View>
    )
}
