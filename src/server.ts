import { app } from "./app"

const { PORT } = process.env

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`))