
import open from "open";
import yargs from 'yargs';
import fetch from "node-fetch"


console.log("first cli");
const argv=process.argv
open("https://devsameer.me/",{app:{ name: open.apps.chrome}})
// init fetch to reddit api
// const res =  fetch('https://www.reddit.com/.json').then((res)=>res.json()).then((data)=>{
// //   console.log(data.data.children);
//     const randomIndex = Math.floor(Math.random() * data.data.children.length)
//     // get radom post from reddit api response of all posts on front page
//     const post = data.data.children[randomIndex]
//     console.log(post);
//     // log if --print flag is passed
//     if (argv[2]=="print") {
//       console.log(`
//         Title: ${post.data.title}\n
//         Link: ${post.data.permalink}
//       `)
//     } else {
//       // open in browser if not
//       open(`https://reddit.com${post.data.permalink}`)
//     }
// })
