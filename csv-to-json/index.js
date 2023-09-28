const fs = require("fs")

let raw = 
// run a SELECT query on SQL and then save as a CSV file
// directly copy and paste CSV into this template literal variable to and run index.js
// paste raw CSV data here (replace the headings)
`id,job_title,salary,dept_id,is_management
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