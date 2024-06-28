from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dog')
def dog():
    response = requests.get('http://localhost:3000/api/dog')
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True, port=5000)
