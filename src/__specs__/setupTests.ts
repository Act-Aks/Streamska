import '@testing-library/jest-native'
import 'react-native-gesture-handler/jestSetup'
import { setUpTests } from 'react-native-reanimated'

setUpTests()

jest.mock('../styles/global.css', () => ({}))
