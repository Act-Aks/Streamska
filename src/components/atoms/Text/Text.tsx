import React from 'react'
import Animated from 'react-native-reanimated'

import { TextProps } from './Text.static'

const Text: React.FC<TextProps> = ({ text, ...props }) => {
    return <Animated.Text {...props}>{text}</Animated.Text>
}

export default Text
