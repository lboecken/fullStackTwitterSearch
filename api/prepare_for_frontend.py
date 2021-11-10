
def reorganize_response(response):
    response = reorganize_media(response)
    response =reorganize_users(response)
    return response['data']


def reorganize_media(response):
    media = response['includes']['media']
    media_keys_and_urls = {}
    for item in media:
        if item['type'] == 'photo':
            media_keys_and_urls[item['media_key']] = item['url']
    for tweet in response['data']:
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
    return response

def reorganize_users(response):
    users = response['includes']['users']
    user_ids_and_info = {}
    for user in users:
        user_ids_and_info[user['id']] = {
            'name': user['name'],
            'username': '@' + user['username'],
            'profile_picture_url' : user['profile_image_url'] 
            }
    for tweet in response['data']:
        try:
            tweet['user_info'] = user_ids_and_info[tweet['author_id']]
        except KeyError:
            print(tweet)

    return response