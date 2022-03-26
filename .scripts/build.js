const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const path = require('path');
// const { async } = require('q');



const cls = new class {

    constructor() {
        this.dirNpm = 'npm'
    }

    async copyFiles() {
        await exec(`rm -rf ${this.dirNpm}/package.json`)

        const filesList = [
            '.eslintrc',
            '.npmignore',
            '.prettierrc',
            'babel.config.js',
            'README.md',
            'package.json'
        ]
        for (let src of filesList) {
            await exec(`cp ${src} ${this.dirNpm}`)
        }
    }

    async build() {
        await exec(`rm -rf ${this.dirNpm}`)
        await exec(`babel src/lib --out-dir ${this.dirNpm}`)
    }

    async prepareModule() {
        await this.build()
        await this.copyFiles()
    }
}

cls.prepareModule()