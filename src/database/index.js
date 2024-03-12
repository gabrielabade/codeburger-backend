import Sequelize from "sequelize"
import mongoose from "mongoose"

import Product from "../app/models/Product.js"
import User from "../app/models/User.js"
import Category from "../app/models/Category.js"

const models = [User, Product, Category]
class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize(
      "postgresql://postgres:c1c4dcACcBbffggCFBB2DdE6GC5--6ad@viaduct.proxy.rlwy.net:12830/railway",
    )
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      )
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      "mongodb://mongo:kazlXEKyYMRRFHMUlheghfMuIBCwRJPP@roundhouse.proxy.rlwy.net:41378",
    )
  }
}
export default new Database()
