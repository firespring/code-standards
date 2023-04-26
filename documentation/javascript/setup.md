### Tools

- [ESLint](https://github.com/eslint/eslint)
- [Standard JS ESLint Config](https://github.com/standard/eslint-config-standard)

### How to install

```bash
 npm install --save-dev eslint eslint-config-firespring@"git+https://github.com/firespring/firespring-code-standards.git#master"
```

### Project Configuration

Add  `.eslintrc.json` the root of the project. Available configs are: `firespring`, `firespring/javascript/backbone`, and `firespring/javascript/vue`.

```json
{
  "extends": "firespring"
}
```
Add the following commands to the `scripts` section of your `package.json` file.
```json
{
   "scripts": {
       "lint": "eslint .",
       "lint-fix": "eslint --fix ."
   }
}
```
