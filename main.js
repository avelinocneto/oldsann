const request = require("request");
const express = require('express')
const app = express()
const mods = [];
const port = process.env.PORT || 3001;
// Create a test GET request to understand what the JSON response from the tmi API looks like
request('http://tmi.twitch.tv/group/user/oldsann/chatters', {
    json: true
}, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    console.log(body.chatter_count);
    for (i = 0; body.chatters.moderators[i] != undefined; i++) {
        mods.push(body.chatters.moderators[i]);
    }
    console.log('mods added');
});

app.get('/mods', (req, res) => {
  res.send(mods);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
