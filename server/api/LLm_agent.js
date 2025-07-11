require("dotenv").config();
const OpenAI = require('openai');

const LLm_agent = async (req, res)=>{
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
            "content" : `You are a secure code refactoring assistant.

                   Follow these strict behavior rules:
               - Only return the **refactored source code block**.
               - Do NOT add explanations, comments,programming language or any text before or after the code.
               - Your response must be like this 
                 {code : <refactoredcode>}
            
          

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

module.exports = {LLm_agent};