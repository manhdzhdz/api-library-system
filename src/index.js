
import app from './app.js'
import { PORT } from './config.js'
app.set('port',PORT)
app.set('title',"Server running ok!")

app.listen(app.get('port'))
console.log(`${app.get('title')} en la url http://localhost:${app.get('port')}/`)
