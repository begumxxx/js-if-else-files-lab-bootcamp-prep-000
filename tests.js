var index = require("./index.js")

if (index.name === "Susan") {
    console.log("Received Joe")
} else {
    console.log("Expected Susan")
}



if (index.height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}

