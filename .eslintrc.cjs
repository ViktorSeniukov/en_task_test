module.exports = {
    root: true,
    env: {
        node: true,
    },
    parserOptions: {
        'ecmaVersion': 12,
        'parser': '@typescript-eslint/parser',
        'sourceType': 'module'
    },
    plugins: [
        'vue',
        '@typescript-eslint',
        '@typescript-eslint/eslint-plugin',
    ],
    extends: [
        'plugin:nuxt/recommended',
        'airbnb-base'
    ],
    settings: {
        'import/resolver': {
            typescript: {},
            alias: {
                map: [
                    ['@', './src'],
                ],
            },
        },
    },
    rules: {
        // 'import/resolver': {
        //     node: {
        //         paths: ['src'],
        //         extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'],
        //     },
        // },
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        "import/no-extraneous-dependencies": [
            "error", {
                "devDependencies": true,
                "optionalDependencies":false,
                "peerDependencies": false,
            }
        ],
        'import/prefer-default-export': 'off',
        'indent': ['error', 'tab'],
        'no-tabs': 'off',
        'max-len': 'off',
        'vue/attribute-hyphenation': ['error', 'never'],
        'vue/attributes-order': ['error', {
            order: [
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'GLOBAL',
                'UNIQUE',
                'TWO_WAY_BINDING',
                'OTHER_DIRECTIVES',
                'EVENTS',
                'OTHER_ATTR',
                'CONTENT',
            ],
        }],
        'vue/block-lang': ['warn', {
            script: {
                lang: 'ts',
            },
        }],
        'vue/component-definition-name-casing': 'off',
        'vue/first-attribute-linebreak': ['error', {
            singleline: 'beside',
            multiline: 'below',
        }],
        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': ['error', {
            html: {
                component: 'always',
                normal: 'always',
                void: 'never',
            },
            math: 'always',
            svg: 'always',
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: 1,
            multiline: 1,
        }],
        'vue/multi-word-component-names': 'off',
        'vue/no-reserved-component-names': ['error', {
            disallowVueBuiltInComponents: true,
            disallowVue3BuiltInComponents: true,
        }],
        'vue/require-name-property': 'error',
        'vue/match-component-file-name': ['error', {
            extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
            shouldMatchCase: true,
        }],
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 1,
        }],
        'vue/no-v-text-v-html-on-component': 'warn',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/max-len': [
            'error',
            {
                'code': 180,
                'template': 9000,
                'ignoreTemplateLiterals': true,
                'ignoreUrls': true,
                'ignoreStrings': true
            }
        ],
    },
    overrides: [
        {
            files: ['*.ts', '*.mts', '*.cts', '*.tsx', '*.vue'],
            rules: {
                'no-undef': 'off',
                '@typescript-eslint/explicit-function-return-type': [
                    'error',
                    {allowExpressions: true},
                ],
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': ['error', {typedefs: false}],
            },
        },
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
                'no-restricted-syntax': [
                    'error',
                    'ForInStatement',
                    'LabeledStatement',
                    'WithStatement',
                    'Literal[value="null"]',
                    {
                        selector: 'ExportDefaultDeclaration > :not(CallExpression[callee.name="defineComponent"])',
                        message: 'Declare a component with "defineComponent"',
                    },
                ],
            },
        },
    ],
};
