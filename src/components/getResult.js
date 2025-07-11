export async function getResult(code) {
  const response = await fetch("http://localhost:4000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  });
  const data = await response.json();
  return data.prediction;
}
