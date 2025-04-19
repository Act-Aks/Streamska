import { useTheme } from '@react-navigation/native'
import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

import { TabStackParamList } from '@App/components/organisms/BottomTabNavigator/BottomTabNavigator.static'

import { getTabBarIconFromTabName, TabBarIconProps } from './TabBarIcon.static'

const TabBarIcon: React.FC<TabBarIconProps> = ({ routeName, focused }) => {
    const { colors } = useTheme()
    const iconSize = 24
    const scale = useSharedValue(1)
    const IconComponent = getTabBarIconFromTabName(routeName as keyof TabStackParamList)

    // Animate scale based on focus state
    useEffect(() => {
        scale.value = withSpring(focused ? 1.2 : 1, { damping: 10, stiffness: 100 })
    }, [focused, scale])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        }
    })

    // Removed handlePressIn and handlePressOut as animation is now focus-driven

    return (
        <Animated.View
            className={'flex flex-1 items-center justify-center'}
            style={animatedStyle}
            // Removed onTouchStart and onTouchEnd
        >
            <IconComponent color={focused ? colors.primary : colors.text} size={iconSize} />
        </Animated.View>
    )
}

export default TabBarIcon
