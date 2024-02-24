module.exports = {
  dialect: "postgres",
  url: "postgresql://postgres:c1c4dcACcBbffggCFBB2DdE6GC5--6ad@viaduct.proxy.rlwy.net:12830/railway",
  define: {
    timespamps: true,
    underscored: true,
    underscoredAll: true,
  },
}

process.env.PG = "pg.native"
