const a = [1, 2, 3, 'a', { c: 8, d: [5, 6] }, [12, 45, [3, 9]]];

console.log(a);

const b = a;

console.log(b);

const c = [...a];

console.log(c);

c[4].c = 9;

console.log(a, c);

const d = a.slice();
c[4].c = 8;

console.log(a, d);
