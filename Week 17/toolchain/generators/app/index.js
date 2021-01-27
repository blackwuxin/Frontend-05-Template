var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    async init() {

        const answers = await this.prompt([
            {
                type: "input",
                name: "name",
                message: "Your project name",
                default: this.appname // Default to current folder name
            }
        ]);

        this.log("app name", answers.name);
        this.fs.copyTpl(
            this.templatePath('main.js'),
            this.destinationPath('src/main.js')
        );
        this.fs.copyTpl(
            this.templatePath('App.vue'),
            this.destinationPath('src/App.vue')
        );
        this.fs.copyTpl(
            this.templatePath('components/HelloWorld.vue'),
            this.destinationPath('src/components/HelloWorld.vue')
        );
        this.fs.copyTpl(
            this.templatePath('babel.config.js'),
            this.destinationPath('babel.config.js')
        );
        this.fs.copyTpl(
            this.templatePath('favicon.ico'),
            this.destinationPath('public/favicon.ico')
        );
        this.fs.copy(
            this.templatePath('index.html'),
            this.destinationPath('public/index.html')
        );
        this.fs.copyTpl(
            this.templatePath('assets/logo.png'),
            this.destinationPath('src/assets/logo.png')
        );
        const pkgJson =
        {
            "name": answers.name,
            "version": "0.1.0",
            "private": true,
            "scripts": {
                "serve": "vue-cli-service serve",
                "build": "vue-cli-service build",
                "lint": "vue-cli-service lint"
            },
            "dependencies": {
                "core-js": "^3.8.3",
                "vue": "^2.6.12"
            },
            "devDependencies": {
                "@vue/cli-plugin-babel": "^4.5.11",
                "@vue/cli-plugin-eslint": "^4.5.11",
                "@vue/cli-service": "^4.5.11",
                "babel-eslint": "^10.1.0",
                "eslint": "^6.8.0",
                "eslint-plugin-vue": "^6.2.2",
                "vue-template-compiler": "^2.6.12"
            },
            "eslintConfig": {
                "root": true,
                "env": {
                    "node": true
                },
                "extends": [
                    "plugin:vue/essential",
                    "eslint:recommended"
                ],
                "parserOptions": {
                    "parser": "babel-eslint"
                },
                "rules": {}
            },
            "browserslist": [
                "> 1%",
                "last 2 versions",
                "not dead"
            ]
        };
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
        this.npmInstall();
    }
};
