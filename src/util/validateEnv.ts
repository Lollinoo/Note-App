import { cleanEnv, port, str } from "envalid";


// Validazione del tipo delle variabili
export default cleanEnv(process.env, {
    EXPRESS_PORT: port(),
    MONGO_CONNECTION_STRING: str()
});