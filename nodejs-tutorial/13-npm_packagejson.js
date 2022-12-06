// npm - global command,comes with node
// npm --version (gives version of npm)

//local dependency - use it only in this particular project
    // npm i <packageName> (install packageName locally)

// global dependency -use it any project
    // npm install -g <pacakeName>
    // sudo npm install -g <packageName> (mac)

//package.json - manifest file(stores imp info about project/package)
    // manual apporach (create pacake.json in the root ,create properties ,etc )
    // npm init (step by step,press enter to skip)
    // npm init -y (everything default)

// npm install (download dependency that are in package.json)


const l=require("lodash")
const items=[1,[2,[3,[4]]]]
const newItem=l.flattenDeep(items)
console.log(newItem)

// dev dependency-testing package ,linting 
    // npm i <packageName> -D or --save-dev

//nodemon
    // nodemon is use in devlopement time -it watches the changes done and run it

//package.json 
    // script
        // npm start(start is command)
        // npm run dev(dev is not command)

//uninstall package that are install by npm
    // 1. npm uninstall <packageName> 
    // 2.   i)manually delete node_modules
    //      ii)manually delete package-lock.json
    //      iii)remove name of that package from package.json
    //      iv)npm install

// version    
    // "package" :"major.minor.patch"
    // tilde(~):- ~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.
    // caret(^):- ^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0.
