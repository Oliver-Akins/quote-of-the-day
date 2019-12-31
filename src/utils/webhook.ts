//
// webhook.ts
//
// Written by: Tyler Akins (2019/12/31)
//


import * as requests from "request-promise-native";
import { DISCORD_WEBHOOK } from "../config";


export const WEBHOOK_PUSH = async (quote: string): Promise<boolean> => {
    return await requests.post({
        uri: DISCORD_WEBHOOK,
        body: {
            content: quote
        },
        qs: {
            wait: true
        },
        json: true
    })
    .then(() => {return true})
    .catch(() => {return false});
};