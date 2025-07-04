from flask import Flask, request, jsonify
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load tokenizer and model
tokenizer_0 = AutoTokenizer.from_pretrained('mrm8488/codebert-base-finetuned-detect-insecure-code')
model_0 = AutoModelForSequenceClassification.from_pretrained('mrm8488/codebert-base-finetuned-detect-insecure-code')

@app.route('/predict', methods=['POST'])
def source_code_scan():
    try:
        code_input = request.get_json()
        data = code_input.get('code', '')

        if not data:
            return jsonify({'error': 'No code provided'}), 400

        inputs = tokenizer_0(data, return_tensors="pt", padding='max_length', truncation=True, max_length=512)

  
        with torch.no_grad():
            outputs = model_0(**inputs)
            logits = outputs.logits
            prediction = torch.argmax(logits, dim=1).item()

        
        if prediction == 1:
            prediction_text = "This code has potential vulnerabilities (insecure)."
        else:
            prediction_text = "This code appears to be secure."

        return jsonify({'prediction': prediction_text, 'label': prediction})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000 , debug=True)
