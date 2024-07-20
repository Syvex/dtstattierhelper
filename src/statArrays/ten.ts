const tenacity: number[] = [420];

const base = 420;
const tier = 2780 / 112;

for (let i = 1; i < 130; i++) {
  tenacity.push(Math.ceil(base + tier * i));
}

export default tenacity;
