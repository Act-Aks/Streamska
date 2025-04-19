import React from 'react'
import Animated from 'react-native-reanimated'

import { useTabBarIndicator } from './TabBarIndicator.logic'
import { TabBarIndicatorProps } from './TabBarIndicator.static'
import { tabBarIndicatorStyles } from './TabBarIndicator.style'

const TabBarIndicator: React.FC<TabBarIndicatorProps> = props => {
    const { colors, indicatorAnimatedStyle, indicatorWidth } = useTabBarIndicator(props)

    return (
        <Animated.View
            style={[
                tabBarIndicatorStyles.indicator,
                { width: indicatorWidth, backgroundColor: colors.primary },
                indicatorAnimatedStyle,
            ]}
        />
    )
}

export default TabBarIndicator
