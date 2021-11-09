


def reorganize_response(response):
    data = response['data']
    media = response['includes']['media']
    media_keys_and_urls = {}
    for item in media:
        if item['type'] == 'photo':
            media_keys_and_urls[item['media_key']] = item['url']
    for tweet in data:
        try:
            media_keys = []
            tweet['media_urls'] = []
            for media_key in tweet['attachments']['media_keys']:
                media_keys.append(media_key)
            for key in media_keys:
                url = media_keys_and_urls[key]
                tweet['media_urls'].append(url)
        except KeyError:
            print(tweet)
    return data
