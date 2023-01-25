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