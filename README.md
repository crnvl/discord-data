# discord-data
 Easily build up a dataset of chatlogs from Discord for deep learning, data analysis, etc.
 
 **DISCLAIMER**: Collecting data such as messages, images, etc. from users without their consent is against the Discord Terms of Service. This project is for educational purposes only. I am not responsible for any actions taken against you by Discord.

 - [Discord Developer Policy](https://discord.com/developers/docs/policies-and-agreements/developer-policy)
 - [Discord Terms of Service](https://discord.com/terms)

## Setup
1. Clone this repository
2. Install required dependencies: `npm install`
3. Enter your token in `/src/config.json`
4. `npm run start` to start the bot

# How it works
Once logged in, the bot will listen to all messages over all servers it has access to. For this to work, make sure your bot has permissions to read contents of a message. To ensure privacy of Discord users, account specific data will **not** be collected.
You can specify further options about the collection of data using the `/src/config.json` file.

### Options
`collect-messages`: Wether the bot should save the content of messages.
