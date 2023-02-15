
// Zeta

// Const obj1 = {‘a’: ‘test’, ‘child’: { ‘t’: ‘test’}, [1, boolean, ‘test’ ] }
// Const obj2 = {‘a’: ‘test’, ‘child’: { ‘t’: ‘test’}, [1, boolean, ‘test’ ] }
// compareObjects(obj1, obj2) - true

// Const obj1 = {‘a’: ‘best’, ‘child’: { ‘t’: ‘test’}, [1, boolean, ‘test’ ] }
// Const obj2 = {‘a’: ‘test’, ‘child’: { ‘t’: ‘test’}, [1, boolean, ‘test’ ] }
// compareObjects(obj1, obj2) - false

// Const obj1 = {‘a’: ‘best’, ‘child’: { ’}, [1, boolean, ‘test’ ] }
// Const obj2 = {‘a’: ‘test’, ‘child’: { ‘t’: ‘test’}, [1, boolean, ‘test’ ] }
// compareObjects(obj1, obj2) - false

// Const obj1 = {‘a’: ‘best’, ‘child’: { ’}, [1, boolean ] }
// Const obj2 = {‘a’: ‘test’, ‘child’: { ‘t’: ‘test’}, [1, boolean, ‘test’ ] }
// compareObjects(obj1, obj2) - false

// const obj1 = {'a’: ‘test’, ‘child’: { ‘t’: ‘test’}, 'subchild': [1, boolean, ‘test’ ] }
// const obj2 = {‘a’: ‘test’, ‘child’: { ‘t’: ‘test’}, 'subchild': [1, boolean, ‘test’ ] }

function compareObjects(obj1, obj2) {
    return Object.entries(obj1 => (key, value) => {
        Object.entries(obj2 => (key2, value2) => {
            if (key1 !== key2) return false;
            if (value1 !== value2) return false;
            if(typeof obj1.child === 'object') {
                if (obj1.key !== obj2.key) return false;
                if (obj1.value !== obj2.value) return false;
            }
            if (Array.isArray(obj1.subchild)) {
                // if (obj1.key !== obj2.key) return false;
                // if (obj1.value !== obj2.value) return false;
                obj1.subchild.map(item => {
                    obj2.subchild.map(item2 => {
                        if (item !== item2) return false;
                    })
                })
            }
        });
        return true;
    });

}

