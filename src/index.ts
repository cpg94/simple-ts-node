import App from './App'

const port = process.env.PORT || 3000

App.listen(port, (err) => {
    if(err){
        return console.error(err) 
    }

    return console.log('Listening on port: ', port)
})