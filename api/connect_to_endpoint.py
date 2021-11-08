import requests
from dotenv import load_dotenv
from pathlib import Path
import os

dotenv_path = Path('/Users/lennart/Desktop/Programming/MasterMind/fullstack_twitter/.env')
load_dotenv(dotenv_path=dotenv_path)
bearer_token = os.getenv("BEARER_TOKEN")
print(bearer_token)


def bearer_oauth(response):
    response.headers["Authorization"] = f"Bearer {bearer_token}"
    response.headers["User-Agent"] = "v2TweetLookupPython"
    return response


def connect_to_endpoint(url):
    response = requests.request("GET", url, auth=bearer_oauth)
    if response.status_code != 200:
        raise Exception(
            "Request returned an error: {} {}".format(
                response.status_code, response.text
            )
        )
    return response.json()
