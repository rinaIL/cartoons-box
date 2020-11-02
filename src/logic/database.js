///
/// Simple collections based database in local storage
/// By: Ronny Sherer
///

/// Internal helper function which gets the
function getDb() {
    if (!localStorage.database) {
        localStorage.database = JSON.stringify({});
    }
    try {
        return JSON.parse(localStorage.database);
    }
    catch {
        delete localStorage.database;
        return getDb();
    }
}

// Return the whole collection or a filtered collection if a predicate is given.
function getCollection(collection, predicate = null) {
    const db = getDb();
    return (!db[collection] || !predicate) ? db[collection] : db[collection].filter(predicate);
}

// Add a value to a collection
function addValue(collection, valueObject) {
    const db = getDb();
    if (!db[collection]) {
        db[collection] = [valueObject];
    }
    else {
        db[collection].push(valueObject);
    }
    localStorage.database = JSON.stringify(db);
}

// Get all values matching key value
function getValues(collection, key, value) {
    return getCollection(collection, item => item[key] === value);
}

// Remove all values matching key value
function removeValue(collection, key, value) {
    removeData(collection, item => item[key] === value);
}

// Remove all values matching predicate
function removeData(collection, predicate) {
    const db = getDb();
    db[collection] = getCollection(collection, item => !predicate(item));
    localStorage.database = JSON.stringify(db);
}

export default {
    addValue,
    getCollection,
    getValues,
    removeValue,
    removeData
};
