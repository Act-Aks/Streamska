import React from 'react'
import { Text } from 'react-native'

import { Container } from '@App/components/atoms'

const SearchScreen: React.FC = () => {
    return (
        <Container className={'items-center justify-center'}>
            <Text className={'text-primary'}>{'Search Screen'}</Text>
        </Container>
    )
}

export default SearchScreen
