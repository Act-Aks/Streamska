import { Carousel } from '@act-aks/rn-carousel'
import React from 'react'
import { View } from 'react-native'
import Animated from 'react-native-reanimated'

import { Container, Text } from '@App/components/atoms'
import { useScroll } from '@App/components/organisms/ScrollProvider/ScrollProvider'

const Home: React.FC = () => {
    const { scrollHandler } = useScroll()

    return (
        <Container>
            <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
                <View className={'h-[400px] py-4'}>
                    <Carousel
                        data={[
                            { color: 'bg-blue-200', text: 'Slide 1 - Fade' },
                            { color: 'bg-red-200', text: 'Slide 2 - Fade' },
                            { color: 'bg-green-200', text: 'Slide 3 - Fade' },
                            { color: 'bg-yellow-200', text: 'Slide 4 - Fade' },
                            { color: 'bg-orange-200', text: 'Slide 5 - Fade' },
                            { color: 'bg-red-200', text: 'Slide 6 - Fade' },
                        ]}
                        renderItem={(item, index) => (
                            <View
                                key={index}
                                className={`h-full w-full items-center justify-center rounded-2xl ${item.color}`}
                            >
                                <Text text={item.text} />
                            </View>
                        )}
                        animationType={'fade'}
                        direction={'horizontal'}
                    />
                </View>
                <View className={'h-[400px] py-4'}>
                    <Carousel
                        data={[
                            { color: 'bg-blue-200', text: 'Slide 1 - Fade' },
                            { color: 'bg-red-200', text: 'Slide 2 - Fade' },
                            { color: 'bg-green-200', text: 'Slide 3 - Fade' },
                            { color: 'bg-yellow-200', text: 'Slide 4 - Fade' },
                            { color: 'bg-orange-200', text: 'Slide 5 - Fade' },
                            { color: 'bg-red-200', text: 'Slide 6 - Fade' },
                        ]}
                        renderItem={(item, index) => (
                            <View
                                key={index}
                                className={`h-full w-full items-center justify-center rounded-2xl ${item.color}`}
                            >
                                <Text text={item.text} />
                            </View>
                        )}
                        animationType={'fade'}
                        direction={'horizontal'}
                    />
                </View>
                <View className={'h-[400px] py-4'}>
                    <Carousel
                        data={[
                            { color: 'bg-blue-200', text: 'Slide 1 - Fade' },
                            { color: 'bg-red-200', text: 'Slide 2 - Fade' },
                            { color: 'bg-green-200', text: 'Slide 3 - Fade' },
                            { color: 'bg-yellow-200', text: 'Slide 4 - Fade' },
                            { color: 'bg-orange-200', text: 'Slide 5 - Fade' },
                            { color: 'bg-red-200', text: 'Slide 6 - Fade' },
                        ]}
                        renderItem={(item, index) => (
                            <View
                                key={index}
                                className={`h-full w-full items-center justify-center rounded-2xl ${item.color}`}
                            >
                                <Text text={item.text} />
                            </View>
                        )}
                        animationType={'fade'}
                        direction={'horizontal'}
                    />
                </View>
            </Animated.ScrollView>
        </Container>
    )
}

export default Home
