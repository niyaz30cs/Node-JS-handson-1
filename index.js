const http = require("http")

// http.createServer(()=>{

// }).listen(4000)

const app = http.createServer((request, response) => {
    if (request.url == "/html") {
        response.write("<html>")
        response.write("<body>")
        response.write("<h1>#-What is Node js?</h1")
        // response.write("<h2>Ans:-</h2>")
        response.write("<h3>Ans:-</h3><p>Node.js is an open source, cross-platform runtime environment and library that is used for running web applications outside the client’s browser.</p>")
        response.write("<ul><li>Node.js is an open source server environment.</li><li>Node.js is free.</li><li>Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.).</li><li>Node.js uses JavaScript on the server.</li></ul>")
        response.write("</body>")
        response.write("</html>")
        response.end()
        }
    else if (request.url == "/json") {
        const objData = {
            name: "Niyaz",
            Branch: "Computer Science",
            Batch: "EA22",
            Academy: "Elevation Academy"
        }

        const strData = JSON.stringify(objData)
        response.end(strData);
    }
    else {
        response.write("page not found")
    }
})
app.listen(3000, () => {
    console.log("server is running in port 3000");
})