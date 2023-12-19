import app from './app';

const port = app.get("server-port");

app.listen(port,()=>{
    console.log('Application on port', port);
})