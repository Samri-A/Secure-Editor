require("dotenv").config();
const OpenAI = require('openai');

const chat = async (req, res)=>{
    const {prompt ,code} = req.body;
    const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.token,
});
   const completion = await openai.chat.completions.create({
    model: "mistralai/mistral-small-3.2-24b-instruct:free",
    messages: [
        {
            "role":"system",
            "content" : `You are a secure code assistant.
            
        

          `
        },
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": `${prompt , code}`
          },
        ]
      }
    ],
    
  });
   const result =  completion.choices[0].message;
   res.json(result);
}

module.exports = {chat};