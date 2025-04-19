import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, View } from 'react-native'

import Text from '@App/components/atoms/Text/Text'

const Settings: React.FC = () => {
    const { navigate } = useNavigation()

    return (
        <View className={'flex flex-1 items-center justify-center bg-background'}>
            <Text className={'text-primary'} text={'Home'} />
            <Pressable
                className={'mt-4 h-10 w-full items-center justify-center rounded-lg'}
                onPress={() => {
                    navigate('HomeTab')
                }}
            >
                <Text className={'text-primary'} text={'Home'} />
            </Pressable>
        </View>
    )
}

export default Settings
