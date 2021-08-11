const http = require('http')

const app = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' })
    let json_response = {

        status: 200,
        message: 'successful',
        result: [
            {
                name: 'Kit',
                Age: '18',
                Location: 'Vancouver',
            },
            {
                name: 'Tom',
                Age: '28',
                Location: 'Tokyo',
            },
            {
                name: 'Jack',
                Age: '38',
                Location: 'London',
            },
        ]
    }

    res.end(JSON.stringify(json_response))

})

app.listen(2999)