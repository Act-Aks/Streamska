const spacing = {
    XS: 'xs',
    SM: 'sm',
    MD: 'md',
    BASE: 'base',
    LG: 'lg',
    XL: 'xl',
    XXL: 'xxl',
} as const
const fontSize = {
    XS: 'xs',
    SM: 'sm',
    BASE: 'base',
    LG: 'lg',
    XL: 'xl',
    XXL: 'xxl',
} as const
const fontWeight = {
    THIN: 'thin',
    LIGHT: 'light',
    NORMAL: 'normal',
    MEDIUM: 'medium',
    SEMIBOLD: 'semibold',
    BOLD: 'bold',
    EXTRABOLD: 'extrabold',
    BLACK: 'black',
} as const
const borderRadius = {
    NONE: 'none',
    SM: 'sm',
    BASE: 'base',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
    FULL: 'full',
} as const

export const theme = {
    spacing,
    fontSize,
    fontWeight,
    borderRadius,
}

export type Theme = typeof theme
