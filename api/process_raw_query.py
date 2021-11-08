import urllib.parse


def process_raw_query(raw_query):
    return f'''?query={urllib.parse.quote(raw_query).replace('%40', 'from:')} -is:retweet'''
