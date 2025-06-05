import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { entries } from '@App/utils/common/misc.ts'

import { RootStackParamList, rootStackScreens, screenOptions } from './RootNavigator.static'

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator: React.FC = () => {
    return (
        <Navigator>
            {entries(rootStackScreens).map(([screen, component]) => (
                <Screen options={screenOptions[screen]} key={screen} name={screen} component={component} />
            ))}
        </Navigator>
    )
}
