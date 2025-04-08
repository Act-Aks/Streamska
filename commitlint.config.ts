import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'body-max-line-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 100],
        'footer-max-length': [2, 'always', 200],
    },
}

export default Configuration
