import axios from 'axios';

async function excuteAgent(code , prompt) {
  const response = await axios.post("/api/ai_asistant" ,{code: code , prompt : prompt}  )
  console.log(response.data)
  return response.data.content;
  
}
export default excuteAgent;
