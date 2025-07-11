require("dotenv").config();
const OpenAI = require('openai');
const { cache } = require("react");
const detect_LLm_agent = async (req, res)=>{
    try{
        const {code} = req.body;
        const openai = new OpenAI({
          baseURL: "https://openrouter.ai/api/v1",
          apiKey: process.env.token,
        });
        const completion = await openai.chat.completions.create({
        model: "mistralai/mistral-small-3.2-24b-instruct:free",
        messages: [
        {
            "role":"system",
            "content" : `Your job is to analyze source code for security vulnerabilities,  and insecure patterns. You identify bugs that could be exploited and classify a code.
             Give your response in this format: if it is truly insecure you give response as "Insecure code" if not give "Secure code" dont add any other text `
        },
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": code
          },
        ]
      }
    ],
    
  });
   const result = completion.choices[0].message
   res.json(result);
}
   catch(error){
    console.error(error);
    res.status(500).json({ error: "Failed to detect vulnerabilities." });
   }
}

module.exports = {detect_LLm_agent};