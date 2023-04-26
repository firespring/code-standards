### Tools

- [PHP CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer)

### How to install

Add `firespring-code-standards` as a repository in `composer.json`:
```json
{
    "repositories": [
		{
			"url": "git@github.com:firespring/firespring-code-standards.git",
			"type": "vcs"
		}
	]
}
```
Require firespring/code-standards as a dev dependency:
```bash
composer require firespring/code-standards:@dev --dev
```

### Project Configuration
Add  `phpcs.xml` ruleset to the root of the project.

```xml
<?xml version="1.0"?>
<ruleset>
    <config name="php_version" value="70224"/>

    <arg name="extensions" value="php"/>

    <file>./</file>

    <exclude-pattern>^build/*</exclude-pattern>
    <exclude-pattern>ops/*</exclude-pattern>
    <exclude-pattern>node_modules/*</exclude-pattern>
    <exclude-pattern>scripts/*</exclude-pattern>
    <exclude-pattern>storage/*</exclude-pattern>
    <exclude-pattern>vendor/*</exclude-pattern>
    <exclude-pattern>bootstrap/cache/*</exclude-pattern>

    <rule ref="./vendor/firespring/code-standards/php/ruleset.xml"/>
</ruleset>
```

Add the following commands to the `scripts` section of your `composer.json` file.

```json
{
    "scripts": {
        "lint": "vendor/bin/phpcs",
        "lint-fix": "vendor/bin/phpcbf || exit 0"
    }
}
```
