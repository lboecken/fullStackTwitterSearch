import json
from flask import request
from .search_helpers.connect_to_endpoint import connect_to_endpoint
from .search_helpers.prepare_query import prepare_query
from .search_helpers.prepare_for_frontend import reorganize_response


def get_from_twitter():
    search_url = prepare_query(request.args.get("query"))
    json_response = connect_to_endpoint(search_url)
    frontend_response = reorganize_response(json_response)
    return json.dumps(frontend_response)
