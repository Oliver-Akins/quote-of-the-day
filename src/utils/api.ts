//
// api.ts
//
// Written by: Tyler Akins (2019/12/31)
//


import * as requests from "request-promise-native"
import { QUOTE_URL } from "../config";


export const GET_RANDOM_QUOTE = async (): Promise<string> => {
    let response = await requests.get(QUOTE_URL);

    let quotes = response.split("\n")

    return quotes[Math.floor(Math.random() * quotes.length)];
};