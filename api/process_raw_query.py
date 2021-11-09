import urllib.parse


def process_raw_query(raw_query):
    return f'''?query={raw_query}%20-is:retweet&tweet.fields=public_metrics&expansions=attachments.media_keys&media.fields=url'''
