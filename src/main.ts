//
// main.ts
//
// Written by: Tyler Akins (2019/12/31)
//


import { GET_RANDOM_QUOTE } from "./utils/api";
import { WEBHOOK_PUSH } from "./utils/webhook";
import { DELAY } from "./config";



const MAIN = async () => {
    const args = process.argv;


    if (args.includes("--single")) {
        console.log(`* Emitting a quote`)
        let quote = await GET_RANDOM_QUOTE();
        await WEBHOOK_PUSH(quote);
        process.exit(0);
    };


    if (args.includes("--repeat")) {

        if (DELAY < 30) {
            console.log("Can't have a delay < 30 seconds.");
            process.exit(1);
        };

        setInterval(
            async () => {
                console.log(`* Emitting a quote`)
                await WEBHOOK_PUSH(await GET_RANDOM_QUOTE());
            },
            DELAY * 1000
        );
    };
};


MAIN();