from flask import Flask, send_from_directory
from flask_cors import CORS
from api.search.search import get_from_twitter

app = Flask(__name__, static_folder="frontend/build", static_url_path="")
cors = CORS(app)


@app.route("/", defaults={"path": ""})
@app.route("/<path>")
def serve(path):
    return send_from_directory(app.static_folder, "index.html")


@app.route("/api/search/")
def search():
    return get_from_twitter()


if __name__ == "__main__":
    app.run(host="0.0.0.0")
