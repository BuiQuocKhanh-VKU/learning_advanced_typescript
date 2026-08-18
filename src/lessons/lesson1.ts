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

// Generic với map<T, U>
const names = ["an", "khanh", "long"];
const lengtha = names.map((value) => value.length);
console.log(lengtha);

//
function mapCollection<T, U>(arr: T[], fn: (item: T) => U): U[] {
    return arr.map(fn);
}
const result = mapCollection(["An", "Khanh", "Mai"], (name) => name.length);

console.log(result);

// ex
function translateMap<Input, Output>(
    arr: Input[],
    fn: (item: Input) => Output,
): Output[] {
    return arr.map(fn);
}

const prices = [100, 200, 300];
const resultt = translateMap(prices, (price) => `${price} VND`);
console.log(resultt);

// Generic voi filter<T>
function filterCollection<Input>(
    arr: Input[],
    fn: (item: Input) => boolean,
): Input[] {
    return arr.filter(fn);
}
const pricess = [4, 5, 3, 2, 6, 7];
const resulttt = filterCollection(pricess, (price) => price >= 5);
console.log(resulttt);

// pluck: Có một danh sách object → lấy ra cùng một thuộc tính của tất cả object.
// function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
//     return arr.map((value) => value[key]);
// }
//"Đưa tôi một mảng object T và một key có thật của object đó. Tôi sẽ lấy giá trị tại key đó của từng object và trả thành một mảng."

const products = [
    { id: 1, name: "iPhone", price: 2000 },
    { id: 2, name: "Samsung", price: 1500 },
    { id: 3, name: "Xiaomi", price: 1000 },
];

function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
    return arr.map((value) => value[key]);
}

const getProduct = pluck(products, "name");
console.log(getProduct);

// generic with reduce
function reduceCollection<T, U>(
    arr: T[],
    fn: (acc: U, item: T) => U,
    initial: U,
): U {
    return arr.reduce(fn, initial);
}
const pricesss = [100, 200, 300];
const total = reduceCollection(pricesss, (sum, price) => sum + price, 0);

console.log(total);

//Genetic with groupBy
function groupBy<T, K extends keyof T>(arr: T[], key: K): Map<T[K], T[]> {
    const map = new Map<T[K], T[]>();
    for (const item of arr) {
        const k = item[key];
        const group = map.get(k) ?? [];
        group.push(item);
        map.set(k, group);
    }
    return map;
}
const people = [
    { age: "22"}
]
const byAge = groupBy(people, "age"); // Map<number, {id;name;age}[]>
console.log(byAge)