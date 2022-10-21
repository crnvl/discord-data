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

client.on("ready", async () => {
    console.log("Logged in!")
    console.log("Created missing directories.")

    client.on(`messageCreate`, async (message) => {
        const regex = /<@!?(\d+)>/g;
        const content = message.content.replace(regex, '').trim();
        
        if (content.length === 0) return;
        
        if (config.options["collect-messages"])
            fs.writeFile(`data/${message.guild?.id}.raw`, `${content}\n`, { flag: "a+" }, (err) => {
                if (err) {
                    fs.mkdir(`data/`, (err) => {
                        if (err) throw err;
                    })
                }
            })
    })
})

client.login(config.token).then(() => {
})