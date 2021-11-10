import urllib.parse


def process_raw_query(raw_query):
    return f'''?query={raw_query}%20-is:retweet&tweet.fields=public_metrics,created_at,source&expansions=attachments.media_keys,author_id&media.fields=url&user.fields=username,name,profile_image_url'''
