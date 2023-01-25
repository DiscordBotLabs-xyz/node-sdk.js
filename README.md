![npm install](https://nodei.co/npm/dblabs.js.png?mini=false)<br/>
[Do you need my help? Visit our Discord server.](https://dblabs.xyz/discord)

# Installation

```console
npm i dblabs.js
yarn add dblabs.js
```

# Usage

```js
const DBLabs = require("dblabs.js");
const dbl = new DBLabs("API Key", client); // "API Key" Your private API Key //"client" when you define your Discord Client

client.on("ready", () => {
  dbl.checkVote("your-bot-id").then((value) => {
    console.log("Vote Check: " + value);
  });

  dbl.serverCount();
  console.log(`Stats has been updated on Discord Bot Labs.`);

  dbl.searchBot("your-bot-id").then((search) => {
    console.log("Search result: " + search);
  });
});
```

# Detailed

### Define Module

```js
const DBLabs = require("dblabs.js");
const dbl = new DBLabs("API Key", client); // "API Key" Your private API Key //"client" when you define your Discord Client
```

### Let's update the bot's data.

```js
client.on("ready", () => {
  dbl.serverCount();
  console.log(`Stats has been updated on Discord Bot Labs.`);
});

// => Stats has been updated on Discord Bot Labs.
```

### Let's check if a User has Voted.

```js
client.on("ready", (bot) => {
  dbl.checkVote("1061964752772931654").then((value) => {
    console.log("Vote Check: " + value);
  });
});

// => Vote Check: false/true
```

```js
client.on("ready", () => {
  dbl.searchBot("your-bot-id").then(search => {
    console.log("Search result: " + search)
  })
})

// => Search result:
/**
    data: {
    avatar: '',
    botID: '',
    username: '',
    discrim: '',
    shortDesc: '',
    prefix: '/',
    votes: 2,
    ownerID: '',
    tags: [ 'Moderation', 'Minecraft' ],
    }
 */
---
```

<h6 align="center">Developed by Discord Bot Labs Team</h6>
