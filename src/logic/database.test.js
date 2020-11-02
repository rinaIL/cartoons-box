import db from './database';

test('Database', () => {
    // Expected:
    const all = [{ id: 2, name: 'Hava' }, { id: 4, name: 'Michal' }, { id: 6, name: 'Dan' }, { id: 8, name: 'Gad' }];
    const onlyMichal = [{ id: 4, name: 'Michal' }];
    const above4 = [{ id: 6, name: 'Dan' }, { id: 8, name: 'Gad' }];
    const above2 = [{ id: 4, name: 'Michal' }, { id: 6, name: 'Dan' }, { id: 8, name: 'Gad' }];

    // Tests:
    expect(db.getCollection('users')).toBe(undefined);

    for (let user of all) {
        db.addValue('users', user);
    }

    expect(db.getCollection('users')).toStrictEqual(all);

    expect(db.getValues('users', 'id', 4)).toStrictEqual(onlyMichal);

    expect(db.getCollection('users', user => user.id > 4)).toStrictEqual(above4);

    db.removeValue('users', 'id', 2);
    expect(db.getCollection('users')).toStrictEqual(above2);

    db.removeData('users', user => user.id > 4);
    expect(db.getCollection('users')).toStrictEqual(onlyMichal);
});
