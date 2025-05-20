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



const getGeminiResponse = async (chatHistory) => {
  const { GoogleGenerativeAI } = await import('@google/generative-ai');
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const formattedChatHistory = chatHistory.map((msg) => ({
    role: msg.role,
    parts: [
      {
        text: msg.message,
      }
    ]
  }));
  
  // console.log(JSON.stringify({ contents: formattedChatHistory}, null, 2));
  
  try { 
    const result = await model.generateContent({ contents: formattedChatHistory});
    return result.response.text();
  } catch (e) {
    console.error("Gemini error:", e.message);
    return null;
  }
};


module.exports = getGeminiResponse;

