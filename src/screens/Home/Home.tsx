import React from 'react'
import { Pressable, View } from 'react-native'
// Import ScrollView and View
import Animated from 'react-native-reanimated'

// Import Animated

import { Container, Text } from '@App/components/atoms'
// Import useScroll
import { useScroll } from '@App/components/organisms/ScrollProvider/ScrollProvider'
import { useColorScheme } from '@App/utils/colorScheme'

const Home: React.FC = () => {
    const { setColorScheme, isDarkColorScheme } = useColorScheme()
    const { scrollHandler } = useScroll() // Get scrollHandler from context

    return (
        // Use Animated.ScrollView instead of Container directly if the whole screen should scroll
        // Or wrap the scrollable content within Container using Animated.ScrollView
        <Container>
            <Animated.ScrollView
                onScroll={scrollHandler} // Attach the scroll handler
                scrollEventThrottle={16} // Optimize scroll event frequency
                contentContainerStyle={{ paddingBottom: 80 }} // Add padding to prevent content hiding behind tab bar
            >
                {/* Add enough content to make the screen scrollable */}
                <View className={'my-2.5 h-[200px] items-center justify-center bg-blue-200'}>
                    <Text text={'Scrollable Content 1'} />
                </View>
                <Pressable
                    className={'my-2 h-10 w-full items-center justify-center rounded-lg bg-primary'} // Added background for visibility
                    onPress={() => {
                        setColorScheme(isDarkColorScheme ? 'light' : 'dark')
                    }}
                >
                    <Text className={'text-primary-foreground'} text={'ToggleTheme'} />
                </Pressable>
                <View className={'my-2.5 h-[200px] items-center justify-center bg-red-200'}>
                    <Text text={'Scrollable Content 2'} />
                </View>
                <View className={'my-2.5 h-[200px] items-center justify-center bg-green-200'}>
                    <Text text={'Scrollable Content 3'} />
                </View>
                <View className={'my-2.5 h-[200px] items-center justify-center bg-yellow-200'}>
                    <Text text={'Scrollable Content 4'} />
                </View>
                <View className={'my-2.5 h-[200px] items-center justify-center bg-pink-200'}>
                    <Text text={'Scrollable Content 5'} />
                </View>
            </Animated.ScrollView>
        </Container>
    )
}

export default Home
