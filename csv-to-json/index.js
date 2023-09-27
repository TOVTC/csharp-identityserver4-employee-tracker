const fs = require("fs")

let raw = 
// run a SELECT query on SQL and then save as a CSV file
// directly copy and paste CSV into this template literal variable to and run index.js
// paste raw CSV data here (replace the headings)
`id,job_title,salary,dept_id,is_management
1,President,70000,1,1
2,Vice President,60000,1,1
3,Marketing Manager,50000,2,1
4,IT Manager,55000,3,1
5,Finance Manager,50000,4,1
6,Operations Manager,50000,5,1
7,Admin Assistant,35000,6,0
8,HR Rep,35000,7,0
9,PR Rep,35000,8,0
10,Marketing Rep,35000,2,0
11,Developer,40000,3,0
12,Accountant,35000,4,0
13,Data Clerk,31000,5,0
14,Customer Service,31000,5,0
15,Operations Attendant,31000,5,0
`

let arr = raw.split(`\n`)
let jsonArr = []
let headers = arr[0].split(',')
for (let i = 1; i < arr.length - 1; i++) {
    let data = arr[i].split(',')
    var obj = {}
    for (var j = 0; j < data.length; j++) {
        obj[headers[j].trim()] = data[j].trim()
    }
    jsonArr.push(obj)
}
const text = JSON.stringify(jsonArr)

new Promise((resolve, reject) => {
    // use right click + format document on the json file to format the objects
    // the message cannot contain the last comma that joins all the objects in the array
    fs.writeFile("./txt.json", text, err => {
        if (err) {
            console.log(err)
        } else {
            resolve({})
        }
    })
})