const EventEmitter = require("events");
const fetch = require("node-fetch");
const { baseUrl } = require("dblabs.js/config.dblabs");

module.exports = class DBLabs extends EventEmitter {
  constructor(token, client) {
    super();
    this._token = token;
    this._client = client;
  }

  serverCount() {
    fetch(baseUrl + "/bots/stats", {
      method: "POST",
      headers: {
        "serverCount": this._client.guilds.cache.size,
        "Content-Type": "application/json",
        "Authorization": this._token,
      },
    }).then(res => res.json())
  }

  async checkVote(id) {
   let request = await fetch(baseUrl + `/bots/${id}/voters`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": this._token,
      },
    })
      .then((res) => res.json())
      
    if (request.error) {
      throw new Error("[ dblabs.xyz ]: " + request.error, true)
      return new Promise((resolve, reject) => {
        resolve(false)
      })
    } else {
      if (request.voted) {
        return new Promise((resolve, reject) => {
          resolve(true)
        })
      } else {
        return new Promise((resolve, reject) => {
          resolve(false)
        })
      }
    }
  }

  async searchBot(id) {
    return await fetch(baseUrl + `/bots/${id}`, {
        method: "GET"
    }).then(res => res.json()).then(json => json)
  }
};
