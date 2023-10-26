const port = process.env.PORT || 3000;
console.log("using port: ", port);
module.exports = {
    swaggerDefinition: {
        swagger: "2.0",
        info: {
            title: "Barter API",
            description: "API to manage barters",
            version: "0.0.1",
            servers: ['http://localhost:'+port]

        }
    },
    apis: [
        'src/routes/**/*.js'
    ]
}