import '@testing-library/jest-native'
import 'react-native-gesture-handler/jestSetup'

require('react-native-reanimated').setUpTests()

jest.mock('../styles/global.css', () => ({}))
