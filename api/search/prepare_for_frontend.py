import datetime


def prepare_for_frontend(response):
    response = reorganize_media(response)
    response = reorganize_users(response)
    response = reorganize_datetime(response)
    return response["data"]


def reorganize_media(response):
    try:
        media = response["includes"]["media"]
        media_keys_and_urls = {}
        for item in media:
            if item["type"] == "photo":
                media_keys_and_urls[item["media_key"]] = item["url"]
        for tweet in response["data"]:
            try:
                media_keys = []
                tweet["media_urls"] = []
                for media_key in tweet["attachments"]["media_keys"]:
                    media_keys.append(media_key)
                for key in media_keys:
                    url = media_keys_and_urls[key]
                    tweet["media_urls"].append(url)
            except KeyError:
                print("no media on tweet")
        return response
    except KeyError:
        print("reorganize_media failed with key error")
        return response


def reorganize_users(response):
    try:
        users = response["includes"]["users"]
        user_ids_and_info = {}
        for user in users:
            user_ids_and_info[user["id"]] = {
                "name": user["name"],
                "username": user["username"],
                "profile_picture_url": user["profile_image_url"],
            }
        for tweet in response["data"]:
            try:
                tweet["user_info"] = user_ids_and_info[tweet["author_id"]]
            except KeyError:
                print(
                    "reorganize_users failed @ tweet level of function with key error"
                )
    except KeyError:
        print("reorganize_users failed @ top level of function with a key error.")
        return response
    return response


def reorganize_datetime(response):
    try:
        for tweet in response["data"]:
            date_time = tweet["created_at"]
            new_datetime = datetime.datetime(
                int(date_time[:4]),
                int(date_time[5:7]),
                int(date_time[8:10]),
                int(date_time[11:13]),
                int(date_time[14:16]),
            )
            tweet["date"] = (
                new_datetime.strftime("%b-X%d").replace("X0", "X").replace("X", "")
            )
            tweet["time"] = (
                new_datetime.strftime("X%I:%M%p").replace("X0", "X").replace("X", "")
            )
    except KeyError:
        print("datetime reorganize failed")
    return response
