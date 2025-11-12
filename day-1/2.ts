const data = (await (Bun.file("1.data")).text()).split("\r\n");

const calculateFuel = (mass: number): number => {
  return Math.floor(mass / 3) - 2;
};

let total = 0;
for (let i = 0; i < data.length; i++) {
  let value = calculateFuel(data[i]);
  
  while (value > 0) {
    total += value;
    value = calculateFuel(value);
  }
}

console.log(total);