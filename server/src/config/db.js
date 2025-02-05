const { Sequelize } = require("sequelize");
require("dotenv").config();

// Buat koneksi ke MySQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, // Matikan log query di terminal
});

// Cek koneksi ke MySQL dan sync models
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("MySQL Connected...");
        
        // Sync all models with database
        await sequelize.sync({ alter: true });
        console.log("Database synced");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
