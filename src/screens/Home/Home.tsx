import { colorScheme, useColorScheme } from 'nativewind'
import React from 'react'
import { Pressable, View } from 'react-native'

import Text from '@App/components/atoms/Text/Text'

const Home: React.FC = () => {
    const { setColorScheme } = useColorScheme()

    return (
        <View className={'flex flex-1 justify-center items-center bg-background'}>
            <Text className={'text-primary'} text={'Home'} />
            <Pressable
                className={'w-full h-10 rounded-lg mt-4 justify-center items-center'}
                onPress={() => {
                    setColorScheme(colorScheme.get() === 'dark' ? 'light' : 'dark')
                }}
            >
                <Text size={'md'} weight={'extrabold'} className={'text-primary'} text={'Home'} />
            </Pressable>
        </View>
    )
}

export default Home
