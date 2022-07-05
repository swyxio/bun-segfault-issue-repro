
import { Database } from "bun:sqlite";
import { renderToReadableStream } from "react-dom/server";

const db = new Database("mydb.sqlite");
db.run(
  "CREATE TABLE IF NOT EXISTS foo (id INTEGER PRIMARY KEY AUTOINCREMENT, greeting TEXT)"
);
db.run("INSERT INTO foo (greeting) VALUES (?)", "Welcome to bun!");
db.run("INSERT INTO foo (greeting) VALUES (?)", "Hello World!");


const dt = new Intl.DateTimeFormat();

console.log('hi');
export default {
  port: 3000,
  async fetch(request) {
    const path = request.url.slice(21)
    if (path === '/foo') {
      const x = "New response " + Math.floor(Math.random()*1000)
      db.run("INSERT INTO foo (greeting) VALUES (?)", x);
      return new Response('added: ' + x);
    } else {
      // fallback
      const x = db.query("SELECT * FROM foo").all();

      let dataHeaders = {
        'status': 200,
        headers: { "Content-Type": "application/json" }
      };
      // return new Response(JSON.stringify(x), dataHeaders);
      return new Response(
        await renderToReadableStream(
          <html>
            <head>
              <title>Hello World</title>
            </head>
            <body>
              <h1>Hello from sxxxx!</h1>
              <p>The date is {dt.format(new Date())}</p>
            </body>
          </html>
        )
      );
    }
  },
};
