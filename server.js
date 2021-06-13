const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000



app.get('/*', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send(Buffer.from(`
        <head>
        <script src="https://gist-it.appspot.com/${req.params['0']}?footer=minimal"></script>
        <script>
            const body = document.getElementsByTagName('body')[0]
            body.style.cssText = 'margin:0;overflow:hidden'
            const gistWrapper = document.getElementsByClassName('gist-it-gist')[0]
            gistWrapper.style.cssText = 'margin:0;height:100vh;'
            const gistContainer = document.getElementsByClassName('gist-file')[0]
            gistContainer.style.cssText = 'display:grid;grid-template-rows:auto minmax(30px, auto);margin:0;border:0;height:100%;'
            const gistData = document.getElementsByClassName('gist-data')[0]
            gistData.style.cssText = 'height:100%;'
            const gistMeta = document.getElementsByClassName('gist-meta')[0]
            gistMeta.style.cssText = 'height:100%;'
        </script>
        </head>
    `))
})

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})