


def reorganize_response(response):
    data = response['data']
    media = response['includes']['media']
    trimmed_media = {}
    for item in media:
        if item['type'] != 'video':
            trimmed_media[item['media_key']] = item['url']
    for tweet in data:
        try:
            media_keys = []
            tweet['media_urls'] = []
            for media_key in tweet['attachments']['media_keys']:
                media_keys.append(media_key)
            for key in media_keys:
                url = trimmed_media[key]
                tweet['media_urls'].append(url)
        except KeyError:
            print(tweet)
    return data
