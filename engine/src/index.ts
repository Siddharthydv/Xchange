require('dotenv').config()
import { createClient, } from "redis";
import { Engine } from "./trade/Engine";


async function main() {
    const engine = new Engine(); 
    const redisClient = createClient({
        socket:{
            host:process.env.REDIS_DOMAIN,
            port:Number(process.env.REDIS_PORT)
        }});
    await redisClient.connect();
    console.log("connected to redis");

    while (true) {
        const response = await redisClient.rPop("messages" as string)
        if (!response) {

        }  else {
            engine.process(JSON.parse(response));
        }        
    }

}

main();