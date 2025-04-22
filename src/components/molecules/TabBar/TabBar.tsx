import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { PlatformPressable } from '@react-navigation/elements'
import { TabNavigationState } from '@react-navigation/native'
import React from 'react'
import Animated from 'react-native-reanimated'

import { TabStackParamList } from '@App/components/organisms/BottomTabNavigator/BottomTabNavigator.static'

import { useTabBar } from './TabBar.logic'
import TabBarIcon from './TabBarIcon/TabBarIcon'
import TabBarIndicator from './TabBarIndicator/TabBarIndicator'

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    const { buildHref, animatedStyle } = useTabBar()

    const renderTabs = () =>
        (state as TabNavigationState<TabStackParamList>).routes.map((route, index) => {
            const { options } = descriptors[route.key] as BottomTabBarProps['descriptors'][string]

            const isFocused = state.index === index

            const onPress = () => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                })

                if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name, route.params)
                }
            }

            const onLongPress = () => {
                navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                })
            }

            return (
                <PlatformPressable
                    key={route.name}
                    href={buildHref(route.name, route.params)}
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarButtonTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    className={'flex h-full flex-1'}
                >
                    <TabBarIcon routeName={route.name} focused={isFocused} />
                </PlatformPressable>
            )
        })

    return (
        <Animated.View
            className={
                'elevation-5 h-[60px] flex-row items-center overflow-hidden border border-border bg-card shadow-lg shadow-primary'
            }
            style={animatedStyle}
        >
            {renderTabs()}
            <TabBarIndicator state={state} />
        </Animated.View>
    )
}

export default TabBar
