import express from "express"
import routes from "./routes.js"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"
import cors from "cors"
import "./database/index.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const corsOptions = {
  origin: "https://codeburger-gabrielabade.vercel.app",
  credentials: true,
}
class App {
  constructor() {
    this.app = express()
    this.app.use(cors(corsOptions))
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(
      "/product-file",
      express.static(resolve(__dirname, "..", "uploads")),
    )

    this.app.use(
      "/category-file",
      express.static(resolve(__dirname, "..", "uploads")),
    )

    this.app.use(express.json())
  }

  routes() {
    this.app.use(routes)
  }
}
export default new App().app
