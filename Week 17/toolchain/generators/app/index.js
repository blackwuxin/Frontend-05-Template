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
            this.templatePath('index.html'),
            this.destinationPath('public/index.html'),
            { title: answers.name }
          );
          const pkgJson = {
            devDependencies: {
              eslint: '^3.15.0'
            },
            dependencies: {
              react: '^16.2.0'
            }
          };
      
          // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
        this.npmInstall(['lodash'], { 'save-dev': true });
    }
};
