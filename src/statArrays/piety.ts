const piety: number[] = [440];

const base = 440;
const tier = 2780 / 150;

for (let i = 1; i < 240; i++) {
  piety.push(Math.ceil(base + tier * i));
}

export default piety;
