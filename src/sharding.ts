import { ShardingManager } from "discord.js";
import config from "./config.json";

const manager = new ShardingManager('./build/index.js', { token: config.token, totalShards: "auto", respawn: true });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn({timeout: -1, delay: 5000});