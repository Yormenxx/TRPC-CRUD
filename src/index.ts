import app from "./app"
import { dbConnect } from "./db"


dbConnect()
app.listen(3000)
console.log('server on port : 3000')









