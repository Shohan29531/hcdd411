// env.js (env vars are strings)
const port = process.env.PORT ?? "3000";                 // server port
const db = process.env.DATABASE_URL ?? "(missing)";      // DB connection string
const env = process.env.NODE_ENV ?? "development";       // dev|production|test
const key = process.env.API_KEY ? "(set)" : "(missing)"; // secret token
console.log({ port, db, env, key });                     // prints values
console.log("isProd?", env === "production");            // toggle behavior
console.log("PORT type:", typeof port);                  // always "string"
console.log("PORT number:", Number(port));               // convert if needed
