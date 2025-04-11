import React from 'react'
import { Pressable } from 'react-native'

import { Container, Text } from '@App/components/atoms'
import { useColorScheme } from '@App/utils/colorScheme'

const Home: React.FC = () => {
    const { setColorScheme, isDarkColorScheme } = useColorScheme()

    return (
        <Container className={'items-center justify-center'}>
            <Pressable
                className={'h-10 w-full items-center justify-center rounded-lg'}
                onPress={() => {
                    setColorScheme(isDarkColorScheme ? 'light' : 'dark')
                }}
            >
                <Text className={'text-primary'} text={'ToggleTheme'} />
            </Pressable>
        </Container>
    )
}

export default Home
