import { RootStackParamList } from '@App/components/organisms/RootNavigator/RootNavigator.static'

declare global {
    namespace ReactNavigation {
        // eslint-disable-next-line @typescript-eslint/no-empty-object-type
        interface RootParamList extends RootStackParamList {}
    }
}
