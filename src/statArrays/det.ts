const determination: number[] = [440];

const base = 440;
const tier = 2780 / 140;

for (let i = 1; i < 170; i++) {
  determination.push(Math.ceil(base + tier * i));
}

export default determination;
