const speed: number[] = [420, 442];

const base = 420 + 2780 / 130; // start at 1st cause of gcd tiering
const tier = (2780 / 130) * 4;

for (let i = 1; i < 40; i++) {
  speed.push(Math.ceil(base + tier * i));
}

export default speed;
