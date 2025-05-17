import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config';

import readline from "readline/promises";
import { stdin, stdout } from 'process';

const genAI = new GoogleGenerativeAI(process.env.GeminiAPI);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const rl = readline.createInterface({ input : stdin, output : stdout });

const prompt = await rl.question('Enter your prompt: ');
rl.close();

console.log("Waiting for response");

const interval = setInterval(() => {
    process.stdout.write(".");
}, 500);

model.generateContent(prompt)
.then((r) => {
    clearInterval(interval);
    console.log();
    console.log(r.response.text());
});
