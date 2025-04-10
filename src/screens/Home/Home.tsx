import { colorScheme, useColorScheme } from 'nativewind'
import React from 'react'
import { Pressable, View } from 'react-native'

import { Text } from '@App/components/atoms'

const Home: React.FC = () => {
    const { setColorScheme } = useColorScheme()

    return (
        <View className={'flex flex-1 items-center justify-center gap-4 bg-background'}>
            <Pressable
                className={'mt-4 h-10 w-full items-center justify-center rounded-lg'}
                onPress={() => {
                    setColorScheme(colorScheme.get() === 'dark' ? 'light' : 'dark')
                }}
            >
                <Text size={'md'} weight={'extrabold'} className={'text-primary'} text={'ToggleTheme'} />
            </Pressable>
            <Pressable className={'mt-4 h-10 w-full items-center justify-center rounded-lg'} onPress={() => {}}>
                <Text size={'xl'} weight={'bold'} className={'text-primary'} text={'Settings'} />
            </Pressable>
        </View>
    )
}

export default Home
