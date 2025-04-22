import createApp from './app'
import * as os from 'os'

const app = createApp()
const port = process.env.PORT

app.listen(port, function() {
  console.log(`Server is running on port ${port} at ${os.hostname}`)
})
