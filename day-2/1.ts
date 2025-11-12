const data = (await (Bun.file("2.data")).text()).split(",");

for (let i = 0; i < data.length - 1; i += 4) {
  const opcode = +data[i];
  const pos1 = +data[i + 1];
  const pos2 = +data[i + 2];
  const loc = +data[i + 3];

  console.log(opcode, pos1, pos2, loc);

  if (opcode === 99) {
    console.log("Halt")
    console.log(data.join(","));
    break;
  }

  if (opcode == 1) data[loc] = data[pos1] + data[pos2];
  if (opcode == 2) data[loc] = data[pos1] * data[pos2];
}

console.log(data.join(","));
