import sys


def handler(event, context):
    print("Yeah yeah yeah")
    return 'eff off from AWS Lambda using Python' + sys.version + '!'
