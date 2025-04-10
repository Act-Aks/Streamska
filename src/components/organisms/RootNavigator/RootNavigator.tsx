import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { entries } from '@App/utils/misc'

import { RootStackParamList, rootStackScreens } from './RootNavigator.static'

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

const RootNavigator: React.FC = () => {
    return (
        <Navigator>
            {entries(rootStackScreens).map(([screen, component]) => (
                <Screen key={screen} name={screen} component={component} />
            ))}
        </Navigator>
    )
}

export default RootNavigator
