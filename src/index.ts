import { Client, GatewayIntentBits } from "discord.js";
import config from "./config.json";
import fs from "fs";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
    ]
})

client.on(`messageCreate`, async (message) => {
    if (config.options["collect-messages"])
        fs.writeFile(`data/${message.guild?.id}.raw`, `${message.content}\n`, { flag: "a+" }, (err) => {
            if (err) throw err;
        })
})

client.login(config.token).then(() => {
    console.log("Logged in!")

    fs.mkdir(`data/`, (err) => {
        if (err) throw err;
    })
    console.log("Created missing directories.")
})