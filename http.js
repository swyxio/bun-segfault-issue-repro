
// import { Database } from "bun:sqlite";
import Layout from './src/Layout';
import { renderToReadableStream } from "react-dom/server";
import { readDir, renderFile } from './parseContent';


const dt = new Intl.DateTimeFormat();

console.log('hi');
export default {
  port: 3000,
  async fetch(request) {
    const path = request.url.slice(22)

    console.log(`fetching ${path}`);

    // render pages files if they match the path
    const pages = await readDir('src/pages').filter(file => file.endsWith('.jsx'));
    console.log(pages)
    const page = pages.find(source => source === path + '.jsx')
    if (page) {
      console.log(`rendering ${page}`);
      const Page = await import('./src/pages/' + page);
      return new Response(
        await renderToReadableStream(
          <html>
            <head>
              <title>Hello World</title>
            </head>
            <body>
              <Page />
            </body>
          </html>
        )
      );
    }

    const sources = readDir('content').filter(file => file.endsWith('.md'));
    const source = sources.find(source => source === path + '.md')
    if (!source) {

      return new Response('not found: ' + path,{
        'status': 404,
      })
    }

    const html = renderFile(`./content/${source}`)
    return new Response(
      await renderToReadableStream(
        <html>
          <head>
            <title>Hello World</title>
          </head>
          <body>
            <Layout>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Layout>
          </body>
        </html>
      )
    );

    // if (path === '/foo') {
    //   const x = "New response " + Math.floor(Math.random()*1000)
    //   db.run("INSERT INTO foo (greeting) VALUES (?)", x);
    //   return new Response('added: ' + x);
    // } else {
    //   // fallback
    //   const x = db.query("SELECT * FROM foo").all();

    //   let dataHeaders = {
    //     'status': 200,
    //     headers: { "Content-Type": "application/json" }
    //   };
    //   // return new Response(JSON.stringify(x), dataHeaders);
    //   return new Response(
    //     await renderToReadableStream(
    //       <html>
    //         <head>
    //           <title>Hello World</title>
    //         </head>
    //         <body>
    //           <Home />
    //           <pre>
    //             {JSON.stringify(x, null, 2)}
    //           </pre>
    //           <p>The date is {dt.format(new Date())}</p>
    //         </body>
    //       </html>
    //     )
    //   );
    // }
  },
};



// const db = new Database("mydb.sqlite");
// db.run(
//   "CREATE TABLE IF NOT EXISTS foo (id INTEGER PRIMARY KEY AUTOINCREMENT, greeting TEXT)"
// );
// db.run("INSERT INTO foo (greeting) VALUES (?)", "Welcome to bun!");
// db.run("INSERT INTO foo (greeting) VALUES (?)", "Hello World!");
