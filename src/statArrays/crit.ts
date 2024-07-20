const criticalHit: number[] = [420];

const base = 420;
const tier = 2780 / 200;

for (let i = 1; i < 240; i++) {
  criticalHit.push(Math.ceil(base + tier * i));
}

export default criticalHit;
