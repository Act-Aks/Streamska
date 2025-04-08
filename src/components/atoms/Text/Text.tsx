import React from 'react'
import Animated from 'react-native-reanimated'

import { TextProps } from './Text.static'

const Text: React.FC<TextProps> = ({ className, text }) => {
    return <Animated.Text className={className}>{text}</Animated.Text>
}

export default Text
