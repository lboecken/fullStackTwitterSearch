from flask import Flask, render_template, send_from_directory, request, jsonify, make_response
from flask_cors import CORS
from api.search import get_from_twitter

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
cors = CORS(app)
    
@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/search/')
def search():
    return get_from_twitter()

@app.route('/api/post/')
def post():
    if request.args.get('action') == 'like':
        return False
if __name__ == '__main__':
    app.run(host='0.0.0.0')
