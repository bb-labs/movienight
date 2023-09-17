import pymysql.cursors


def handler(event, context):
    print("event: ", event)
    print("context: ", context)

    connection = pymysql.connect(
        host='movienight.c5e8mgqyznzj.us-west-2.rds.amazonaws.com',
        user='username',
        password='password',
        cursorclass=pymysql.cursors.DictCursor)

    # with connection:
    #     with connection.cursor() as cursor:
    #         cursor.execute(cmd)
