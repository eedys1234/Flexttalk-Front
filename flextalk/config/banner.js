const childProcess = require('child_process');

module.exports = () => {
    const commit = childProcess.execSync('git rev-parse --short HEAD');
    const user = childProcess.execSync('git config user.name');
    const date = new Date().toLocaleString();
    return `commitVersion : ${commit} build time : ${date} Author : ${user}`;
}