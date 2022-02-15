import { app } from './app.js'
import mongoose from "mongoose"

const port = process.env.PORT || 3000


mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true },
    () => {
        console.log("Connected to Mongo")
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`)
        })
    })