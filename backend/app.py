from flask import Flask, jsonify
from flask_cors import CORS

from data.emojis import emojis

app = Flask(__name__)
CORS(app)

@app.route("/api/emojis")
def get_emojis():
    return jsonify([e.to_dict() for e in emojis])

if __name__ == "__main__":
    app.run(debug=True)
