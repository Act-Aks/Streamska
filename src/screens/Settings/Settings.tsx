import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, View } from 'react-native'

import Text from '@App/components/atoms/Text/Text'
import { useColorScheme } from '@App/utils/common/colorScheme.ts'

const Settings: React.FC = () => {
    const { navigate } = useNavigation()
    const { setColorScheme, isDarkColorScheme } = useColorScheme()

    return (
        <View className={'flex flex-1 items-center justify-center bg-background'}>
            <Pressable
                className={'mt-4 h-10 w-full items-center justify-center rounded-lg backdrop-blur backdrop-filter'}
                onPress={() => {
                    navigate('Home')
                }}
            >
                <Text className={'text-primary'} text={'Home'} />
            </Pressable>

            <Pressable
                className={'mt-4 h-10 w-full items-center justify-center rounded-lg bg-primary'}
                onPress={() => setColorScheme(isDarkColorScheme ? 'light' : 'dark')}
            >
                <Text className={'text-background'} text={isDarkColorScheme ? '🌙' : '🌞'} />
            </Pressable>
        </View>
    )
}

export default Settings
