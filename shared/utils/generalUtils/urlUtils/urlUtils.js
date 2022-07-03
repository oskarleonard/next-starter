export function isHashNameInUrl(hashName, location) {
  return location.hash?.includes(hashName);
}

export function toggleUrlHash(hashName, location, historyAction) {
  const isHashInUrl = isHashNameInUrl(hashName, location);
  const hashString = isHashInUrl
    ? location.hash.replace(hashName, '')
    : location.hash + hashName;

  historyAction({
    ...location,
    hash: hashString,
  });
}

export function setUrlSearchParam(key, value, location, historyAction) {
  const searchLocation = location.search;
  const searchParams = new URLSearchParams(searchLocation);

  searchParams.set(key, value);

  historyAction({
    ...location,
    search: searchParams.toString(),
  });
}

export function toggleUrlSearchParam(key, value, location, historyAction) {
  const searchLocation = location.search;
  const searchParams = new URLSearchParams(searchLocation);

  const currentValue = searchParams.get(key);
  currentValue === value
    ? searchParams.delete(key)
    : searchParams.set(key, value);

  historyAction({
    ...location,
    search: searchParams.toString(),
  });
}

export function deleteUrlSearchParam(key, location, historyAction) {
  const searchLocation = location.search;
  const searchParams = new URLSearchParams(searchLocation);
  searchParams.delete(key);
  historyAction({
    ...location,
    search: searchParams.toString(),
  });
}

export function getUrlSearchParam(key, location) {
  const searchLocation = location.search;
  const searchParams = new URLSearchParams(searchLocation);

  return searchParams.get(key);
}
