import awyes.utils


def filter_by_api_name(apis, key, val):
    filtered = [api for api in apis if awyes.utils.rgetattr(api, key) == val]

    if len(filtered) > 1:
        raise Exception(f"more than one api with the same name: {filtered}")

    if len(filtered) == 0:
        raise Exception(f"no matching apis with name: {val}")

    return filtered.pop()
