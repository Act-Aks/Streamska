/**
 * @type {import('prettier').Config}
 */
module.exports = {
    arrowParens: 'avoid',
    importOrder: ['<THIRD_PARTY_MODULES>', '^@App/(.*)$', '^[./]'],
    importOrderCaseInsensitive: true,
    importOrderParserPlugins: ['classProperties', 'decorators-legacy', 'typescript', 'jsx'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    jsonRecursiveSort: false,
    jsonSortOrder: '{"*": "lexical"}',
    jsxSingleQuote: true,
    plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-sort-json'],
    printWidth: 120,
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    useTabs: false,
}
