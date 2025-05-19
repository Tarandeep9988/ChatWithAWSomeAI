// const { GoogleGenerativeAI } = require("@google/generative-ai");
// import { GoogleGenAI } from "@google/genai";


// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


// const getGeminiResponse = async (userMsg) => {
//     return model.generateContent(userMsg)
//     .then((r) => {
//         return r.response.text();
//     })
//     .catch((e) => {
//         console.error(e.message);
//         console.log("Error fetching Gemini api");
//     });
// }



const getGeminiResponse = async (userMsg) => {
  const { GoogleGenerativeAI } = await import('@google/generative-ai');
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    console.log(userMsg);
    
    const result = await model.generateContent(userMsg);
    return result.response.text();
  } catch (e) {
    console.error("Gemini error:", e.message);
    return null;
  }
};


module.exports = getGeminiResponse;

