import sys


def handler(event, context):
    return 'eff off from AWS Lambda using Python' + sys.version + '!'
