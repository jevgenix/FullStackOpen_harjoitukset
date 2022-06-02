// Sovelluksen käynnistystiedosto index.js pelkistyy seuraavasti
// index.js ainoastaan importtaa tiedostossa app.js olevan varsinaisen sovelluksen ja käynnistää sen
// Sovelluksen käynnistäminen tapahtuu nyt server-muuttujassa olevan olion kautta
// Käynnistymisestä kertova konsolitulostus tehdään logger-moduulin funktion info avulla
// Ympäristömuuttujien käsittely on eriytetty moduulin utils/config.js vastuulle

const app = require("./app"); // varsinainen Express-sovellus
const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
