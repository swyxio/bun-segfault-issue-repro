import Markdoc from '@markdoc/markdoc';
import { readFileSync, readdirSync } from 'fs';

// export function readDir(dir) {
//   const files = readdirSync()
// } 

// read directory and filter out non-markdown files
export function readDir(dir) {
  const files = readdirSync(dir);
  return files
}


export function renderFile(path) {

  const doc = readFileSync(path, 'utf8')

  const ast = Markdoc.parse(doc);
  
  const content = Markdoc.transform(ast);
  
  const html = Markdoc.renderers.html(content);
  
  return html
}