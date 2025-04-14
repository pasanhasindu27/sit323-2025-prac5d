const app = require('./server'); // Import the server app
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Advanced Calculator Microservice running on port ${PORT}`);
});
