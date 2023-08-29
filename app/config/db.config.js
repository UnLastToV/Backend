module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "itd102_db",
    dialect: "mysql",
    pool: {
        MAX: 5, 
        MIN: 0,
        acquire: 30000,
        idle: 10000, // maximum time
    }
}