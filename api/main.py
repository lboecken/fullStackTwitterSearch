import json
from flask import request
from .connect_to_endpoint import connect_to_endpoint
from .process_raw_query import process_raw_query
from .get_tweet_details import get_tweets_ids, prepare_tweets_ids_search_url
from .prepare_for_frontend import reorganize_response
import pprint



def get_from_twitter():
    query = request.args.get('query')
    processed_query = process_raw_query(query)
    base_url = 'https://api.twitter.com/2/tweets/search/recent'
    search_url = base_url + processed_query
    print(search_url)
    json_response = connect_to_endpoint(search_url)
    frontend_response = reorganize_response(json_response)
    pprint.pprint(frontend_response)
    return json.dumps(frontend_response)
    


