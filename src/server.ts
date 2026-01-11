import express, {Request, Response} from 'express'
import eventRoute from "./routes/EventRoute";
import path from 'path';
import cors, {CorsOptions} from 'cors';

const app = express()
const port = 3000
const corsOptions:CorsOptions = {
    origin: ['http://localhost:5051'],
    methods: ['GET','POST','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization'],
};
app.use(cors(corsOptions))
app.use(express.json())
app.use('/events',eventRoute);
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

const webApp = express()
     const webPort= 5051
     webApp.use(express.static(path.join(process.cwd())));
 webApp.listen(webPort, () => {
        console.log(`WebApp listening at http://localhost:${webPort}`)
     })



