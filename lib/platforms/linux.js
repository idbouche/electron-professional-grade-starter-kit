
const exec = require('child_process').exec
const ora = require('ora');

const spinner = new ora({
	text: 'packaging for linux ...',
	spinner: 'line',
	color: 'green'
});


var workingDir = process.cwd()
var myString = workingDir;
var splits = myString.split("/");

var nameOfApp = splits[splits.length - 1]

spinner.start()

let cmd = `./node_modules/electron-packager/cli.js . ${nameOfApp} --platform=linux --arch=x64 --overwrite --prune=true --out=${workingDir}/dist --asar`
exec(cmd, (err, stdout, stderr) => {
	console.log(stdout);
  console.log(err);
  console.log(stderr);
	spinner.stop()
  console.log(`Succes package app on /dist/${nameOfApp}-linux-x64:
	cd dist
	cd ${nameOfApp}-linux-x64
	./${nameOfApp}
`);
});
