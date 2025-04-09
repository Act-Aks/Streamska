import '@testing-library/jest-native'
import 'react-native-gesture-handler/jestSetup'
import { setUpTests } from 'react-native-reanimated'

setUpTests()

jest.mock('../styles/global.css', () => ({}))

jest.mock('react-native-bootsplash', () => {
    return {
        hide: jest.fn().mockResolvedValue({}),
        isVisible: jest.fn().mockResolvedValue(false),
        useHideAnimation: jest.fn().mockReturnValue({
            container: {},
            logo: { source: 0 },
            brand: { source: 0 },
        }),
    }
})
