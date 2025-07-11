from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline


app = Flask(__name__)
CORS(app)

pipe = pipeline("text-classification", model="mrm8488/codebert-base-finetuned-detect-insecure-code")


@app.route('/predict', methods=['POST'])
def source_code_scan():
    insecure_prediction_text = "This code has potential vulnerabilities (insecure)."
    secure_prediction_text = "This code appears to be secure."
    try:
        code_input = request.get_json()
        data = code_input.get('code', '')
        result = pipe(data)
        score = result[0]["score"]
        prediction = ''
        if result[0]["label"] == "LABEL_1":
            prediction = f"{insecure_prediction_text } confidence: { score}"
            
        else:
            prediction = f"{secure_prediction_text } confidence: { score}"
        return jsonify({'prediction' : prediction})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=4000 , debug=True)
