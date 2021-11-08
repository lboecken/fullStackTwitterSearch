import pprint


def get_tweets_ids(tweets):
    tweets_ids = ''
    # pprint.pprint(tweets)
    for tweet in tweets:
        tweets_ids += tweet["id"] + ','
    return tweets_ids.rstrip(',')


def prepare_tweets_ids_search_url(ids):
    tweet_fields = '&tweet.fields=public_metrics'
    expansions = '&expansions=attachments.media_keys'
    media_fields = '&media.fields=url'
    return f'?ids={ids}{tweet_fields}{expansions}{media_fields}'
