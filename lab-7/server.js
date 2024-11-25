// const express = require('express')
// const logger = require('morgan')
// const path = require('path')
// const server = express()
// server.use(express.urlencoded({'extended': true}))
// server.use(logger('dev'))
// // Routes
// server.get('/do_a_random', (req, res) => {
//   res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`)
// })
// // Setup static page serving for all the pages in "public"
// const publicServedFilesPath = path.join(__dirname, 'public')
// server.use(express.static(publicServedFilesPath))
// // The server uses port 80 by default unless you start it with the extra
// // command line argument 'local' like this:
// //       node server.js local
// let port = 80
// if (process.argv[2] === 'local') {
//   port = 8080
// }
// server.listen(port, () => console.log('Ready on localhost!'))

// server.post('/submit', (req, res) => {
//     const { adjective, animal, pluralNoun, emotion, exclamation } = req.body;
//     // Check if all fields are filled
//     if (!adjective || !animal || !pluralNoun || !emotion || !exclamation) {
//         res.send(`
//           <h1>Submission Failed</h1>
//           <p>Please fill out all fields.</p>
//           <a href="/">Go Back to Form</a>
//         `);
//         return;
//     }
//     // Construct the Mad Lib from the form data
//     const madLib = `Today I saw a ${adjective} ${animal} jumping over ${pluralNoun}. It made me feel ${emotion} and I exclaimed, "${exclamation}!"`;
//     // Send back the filled Mad Lib
//     res.send(`
//       <h1>Submission Successful</h1>
//       <p>${madLib}</p>
//       <a href="/">Go Back to Form</a>
//     `);
// });


const express = require('express');
const logger = require('morgan');
const path = require('path');
const server = express();

// Middleware
server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));
server.use(express.static(path.join(__dirname, 'public')));

// POST route for handling form submissions
server.post('/submit', (req, res) => {
    const { adjective, animal, pluralNoun, emotion, exclamation } = req.body;
    if (!adjective || !animal || !pluralNoun || !emotion || !exclamation) {
        res.send(`
          <h1>Submission Failed</h1>
          <p>Please fill out all fields.</p>
          <a href="/">Go Back to Form</a>
        `);
        return;
    }

    const madLib = `Today I saw a ${adjective} ${animal} jumping over ${pluralNoun}. It made me feel ${emotion} and I exclaimed, "${exclamation}!"`;
    res.send(`
      <h1>Submission Successful</h1>
      <p>${madLib}</p>
      <a href="/">Go Back to Form</a>
    `);
});

// Determine port
const port = process.env.PORT || (process.argv[2] === 'local' ? 8080 : 80);
server.listen(port, () => console.log(`Server running on port ${port}`));
