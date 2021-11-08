import json
from .connect_to_endpoint import connect_to_endpoint
from .process_raw_query import process_raw_query
from .get_tweet_details import get_tweets_ids, prepare_tweets_ids_search_url
from .prepare_for_frontend import reorganize_response
import pprint


def main():
    raw_query = '@braves'
    processed_query = process_raw_query(raw_query)
    base_url = 'https://api.twitter.com/2/tweets/search/recent'
    search_url = base_url + processed_query
    json_response = connect_to_endpoint(search_url)['data']
    tweets_ids = get_tweets_ids(json_response)
    processed_query2 = prepare_tweets_ids_search_url(tweets_ids)
    base_url2 = "https://api.twitter.com/2/tweets"
    search_url2 = base_url2 + processed_query2
    json_response2 = connect_to_endpoint(search_url2)
    frontend_response = reorganize_response(json_response2)
    pprint.pprint(frontend_response)
    return json.dumps(frontend_response)
    


