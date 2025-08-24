require("dotenv").config();
const OpenAI = require('openai');

const autocompletion = async (req, res)=>{
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
            "content" : `"User is writing JavaScript code. Complete this line:\n\nfunction add(a, b) {\n  return "
.
            
        

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

module.exports = {autocompletion};