const app = require("./src/app");
const { connectDB } = require("./src/config/db");

const PORT = process.env.PORT || 5000;

// Hubungkan ke database dulu, baru jalankan server
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});


