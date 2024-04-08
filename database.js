const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/user', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB conectado com sucesso');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB: ', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;