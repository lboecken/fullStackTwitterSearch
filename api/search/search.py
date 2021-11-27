import json
from flask import request
from .connect_to_endpoint import connect_to_endpoint
from .prepare_query import prepare_query
from .prepare_for_frontend import prepare_for_frontend


def get_from_twitter():
    search_url = prepare_query(request.args.get("query"))
    json_response = connect_to_endpoint(search_url)
    frontend_response = prepare_for_frontend(json_response)
    return json.dumps(frontend_response)
