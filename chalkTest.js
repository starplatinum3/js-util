
let enVarsStr=Object.keys(envars)
.map(envar =>
  `${envar}=${envars[envar]}`)
.join(' ')

let chalkVal=    chalk.dim(
    `$ ${enVarsStr
    }`,
    'node',
    args.join(' '))
console.log(chalkVal);