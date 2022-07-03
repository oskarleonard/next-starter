export function imPush(arr, newEntry) {
  const safeSpread = arr || [];
  return [...safeSpread, newEntry];
}

export function imArrayMerge(first = [], second = []) {
  return [...first, ...second];
}

// It basically add an item to a list If item exists it updates it with new value,
// otherwise it just adds the item to the list, ie. The list shall not have any duplicated items.
export function imSetToArray(
  array = [],
  mapToAdd = {},
  objUniqueField = '',
  index
) {
  const indexToUpdate = index
    ? index
    : array.findIndex((arrayItem) => {
        return arrayItem[objUniqueField] === mapToAdd[objUniqueField];
      });

  if (indexToUpdate === -1) {
    // mapToAdd doesn't exists in list
    return imPush(array, mapToAdd);
  } else {
    // mapToAdd obj exists in list. Update old obj with mapToAdd
    const firstPart = imPush(array.slice(0, indexToUpdate), mapToAdd);
    const secondPart = array.slice(indexToUpdate + 1);
    return imArrayMerge(firstPart, secondPart);
  }
}

export function imDeleteFromArray(array = [], index) {
  const firstPart = array.slice(0, index);
  const secondPart = array.slice(index + 1);

  return imArrayMerge(firstPart, secondPart);
}

export function imDeleteFromArrayById(array = [], idFieldName, idValue) {
  const indexToDelete = array.findIndex((arrayItem) => {
    return arrayItem[idFieldName] === idValue;
  });

  return imDeleteFromArray(array, indexToDelete);
}

export function imDeleteItemFromArray(array = [], item) {
  const indexToDelete = array.findIndex((arrayItem) => {
    return arrayItem === item;
  });

  return imDeleteFromArray(array, indexToDelete);
}

export function imSetToObj(obj = {}, key, value) {
  return {
    ...obj,
    [key]: value,
  };
}

export function imMergeObj(first = {}, second = {}) {
  return {
    ...first,
    ...second,
  };
}

export function imArrayMergeNoDuplicates(
  baseArray,
  overridingArray,
  objUniqueField
) {
  const ids =
    baseArray && new Set(baseArray.map((item) => item[objUniqueField]));
  const filteredBaseArray =
    ids && baseArray.filter((item) => !ids.has(item[objUniqueField]));

  return imArrayMerge(filteredBaseArray, overridingArray);
}
