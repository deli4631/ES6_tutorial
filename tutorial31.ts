// we learn about set type which can be called strong set
// in which it store object ref

// let mySet = new Set();
// let key = {};
// mySet.add(key)
// console.log(mySet.size)

// key = null;
// console.log(mySet.size)

// what we can infer is that even though the key is null
// our ref to the key object still existed in our set and we 
// can retrieve it 
// key = [...mySet][0]; // going to give ius the object back

// weak set, just like the strong set, has add, has, and delete emthod
// to main diff is that it can only store obj ref and non primiatve values 
// and obj ref are weak
// so if the ref is removed, then a weak set allows for garabe collection 

let set = new WeakSet();
let key = {}
set.add(key)
console.log(set.has(key));
key = null;
// not possible to verify if the ref is removed beause we
// need at least one ref to this object to pass to has mehtod. have to put
// faith the js engine
// only advamntage is memoery handled properly, if we need only trak refs of object
// and nothign more then that then weak over strong 