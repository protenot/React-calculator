module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node":true,
    },
    "settings": {
        "react": {
          "version": "detect"
        }
      },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        'ecmaFeatures': {
            jsx: true,
         },
      
        "sourceType": "module"
    },
    "plugins": [
        "jest", 
        "import",
        "react",
        "@typescript-eslint"
    ],
    "root":true,
    "rules": {
        "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        'react/prop-types': 0,
        "no-undef":"off",
"@typescript-eslint/no-var-requires":"off",

"import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/extensions": ["warn", "never"],
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",


    }
}
