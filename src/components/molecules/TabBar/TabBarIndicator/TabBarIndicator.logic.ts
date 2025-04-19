import { useTheme } from '@react-navigation/native'
import { useEffect } from 'react'
import { useWindowDimensions } from 'react-native'
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

import { TAB_INDICATOR_PADDING, TAB_INDICATOR_WIDTH_MULTIPLIER, TabBarIndicatorProps } from './TabBarIndicator.static'

export const useTabBarIndicator = ({ state }: TabBarIndicatorProps) => {
    const { colors } = useTheme()
    const { width: screenWidth } = useWindowDimensions()

    const containerWidth = screenWidth - TAB_INDICATOR_PADDING
    const numberOfTabs = state.routes.length
    const tabWidth = containerWidth / numberOfTabs
    const indicatorWidth = tabWidth * TAB_INDICATOR_WIDTH_MULTIPLIER

    // Initialize indicator position based on the current active tab index
    const indicatorX = useSharedValue(state.index * tabWidth + (tabWidth - indicatorWidth) / 2)

    // useEffect to update indicator position when state.index changes
    useEffect(() => {
        const targetX = state.index * tabWidth + (tabWidth - indicatorWidth) / 2
        indicatorX.value = withSpring(targetX, { damping: 15, stiffness: 120 })
    }, [state.index, tabWidth, indicatorWidth, indicatorX])

    // Animated style for the indicator
    const indicatorAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: indicatorX.value }],
        }
    })

    return {
        colors,
        indicatorAnimatedStyle,
        indicatorWidth,
    }
}
