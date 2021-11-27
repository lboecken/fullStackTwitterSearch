def prepare_query(query):
    base_url = "https://api.twitter.com/2/tweets/search/recent"
    expansions = "&expansions=attachments.media_keys,author_id"
    media_fields = "&media.fields=url"
    user_fields = "&user.fields=username,name,profile_image_url"
    tweet_fields = "&tweet.fields=public_metrics,created_at,source"
    return f"""{base_url}?query={query}{expansions}{media_fields}{user_fields}{tweet_fields}"""
