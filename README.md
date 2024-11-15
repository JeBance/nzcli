# nzcli
[nzcli](https://jebance.github.io/nzcli/) is a class for checking parameters entered in the terminal for [nzserver](https://jebance.github.io/nzserver/)

**Table of Contents**

- [nzcli](#nzcli)
    - [Getting started](#getting-started)
        - [Node.js](#nodejs)
    - [Example](#example)
    - [License](#license)

### nzcli

* `nzcli` reads `key="value"` arguments entered into the terminal when the program is started, and creates an object with those parameters.


### Getting started

#### Node.js

Install nzcli using npm:

```sh
npm install nzcli
```

And import it as a CommonJS module:

```js
const nzcli = require('nzcli');
```


### Example

In this example, when creating a new class `nzcli`, the global variable `parameters` and `process` are passed. The class will create a reference to the variable `parameters` and add the arguments found with values ​​to this variable. If you do not pass the global variable, the arguments will be written to its own variable `parameters`.

```js
const nzcli = require('./index.js');
const process = require('process');
const parameters = {};	// global variable
const cli = new nzcli(parameters, process);
console.log(parameters);
//console.log('or');
//console.log(cli.parameters);
```

Now when you enter the command in the terminal:

```
$ node test.js config="/home/user/dir/" db="/home/user/dir/DB/" net="network" host="192.168.0.10" port="8080" user="User Name" mail="username@somemail.com"
```

We will get the output of the object with parameters:

```
{
  config: '/home/user/dir/',
  db: '/home/user/dir/DB/',
  net: 'network',
  host: '192.168.0.10',
  port: '8080',
  user: 'User Name',
  mail: 'username@somemail.com'
}
```


### License

[GNU Lesser General Public License](https://www.gnu.org/licenses/lgpl-3.0.en.html) (3.0 or any later version). Please take a look at the [LICENSE](LICENSE) file for more information.
