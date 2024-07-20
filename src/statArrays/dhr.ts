const directHit: number[] = [420];

const base = 420;
const tier = 2780 / 550;

for (let i = 1; i < 650; i++) {
  directHit.push(Math.ceil(base + tier * i));
}

export default directHit;
