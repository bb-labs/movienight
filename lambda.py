import os
import gzip
import shutil
import pathlib
import requests
import subprocess
import pymysql.cursors

from tqdm import tqdm


def download_and_unzip(remote_url, local_file_name):
    # Get the stream
    r = requests.get(remote_url, stream=True)
    file_size = int(r.headers.get('Content-Length', 0))

    # Create the local path
    local_path = pathlib.Path(local_file_name)
    local_path_gz = pathlib.Path(local_file_name + '.gz')

    # Download the file
    with tqdm.wrapattr(r.raw, "read", total=file_size) as r_raw:
        with local_path_gz.open("wb") as f:
            shutil.copyfileobj(r_raw, f)

    # Gunzip it
    with gzip.open(local_path_gz, 'rb') as f_in:
        with open(local_path, 'wb') as f_out:
            shutil.copyfileobj(f_in, f_out)

    # Delete the zipped version
    os.remove(local_path_gz)


def handler(event, context):
    subprocess.call(["ls", "-l"])

    download_and_unzip(
        remote_url='https://datasets.imdbws.com/title.basics.tsv.gz',
        local_file_name='/tmp/titles.tsv')
    download_and_unzip(
        remote_url='https://datasets.imdbws.com/title.ratings.tsv.gz',
        local_file_name='/tmp/ratings.tsv')

    connection = pymysql.connect(
        host='movienight.c5e8mgqyznzj.us-west-2.rds.amazonaws.com',
        user='username',
        password='password',
        autocommit=True,
        local_infile=True,
        cursorclass=pymysql.cursors.DictCursor)

    with connection:
        with connection.cursor() as cursor:
            with pathlib.Path("init.sql").open() as sql:
                for cmd in filter(None, sql.read().split(";")):
                    cursor.execute(cmd)
