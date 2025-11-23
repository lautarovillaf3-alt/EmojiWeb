from flask import Flask, jsonify
from flask_cors import CORS
import os


from data.emojis import emojis

app = Flask(__name__)
CORS(app)

@app.route("/api/emojis")
def get_emojis():
    return jsonify([e.to_dict() for e in emojis])

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
