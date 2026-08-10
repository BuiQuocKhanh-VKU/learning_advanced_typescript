// Generic

// function firstItem(arr: any[]) {
//     return arr[0];
// }

// const a = firstItem([10, 20]);

function lastItem<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
}

const a = lastItem([10, 20, 30]);
const c = lastItem([true, false]);
console.log(a);
console.log(c);

// Generic + extends
console.log("=============================");
interface hasId {
    id: number;
}

function showId<T extends hasId>(item: T): T {
    console.log(item.id);
    return item;
}

showId({ id: 1, name: "Khanh" });
showId({ id: 5, price: 100 });

// keyof — lấy các key của object
console.log("=============================");
const student = {
    id: Date.now(),
    name: "Khanh",
    score: 9,
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const d = getValue(student, "name");
const e = getValue(student, "score");

console.log(d); 
console.log(e); 