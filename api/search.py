import json
from flask import request
from .search_helpers.connect_to_endpoint import connect_to_endpoint
from .search_helpers.prepare_queries import prepare_queries
from .search_helpers.prepare_for_frontend import reorganize_response
import pprint


def get_from_twitter():
    query = request.args.get("query")
    processed_query = prepare_queries(query)
    base_url = "https://api.twitter.com/2/tweets/search/recent"
    search_url = base_url + processed_query
    print(search_url)
    json_response = connect_to_endpoint(search_url)
    frontend_response = reorganize_response(json_response)
    return json.dumps(frontend_response)
