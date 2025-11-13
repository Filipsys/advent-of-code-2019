const data = (await (Bun.file("2.data")).text()).split(",");

let freshOpcode = [...data];

for (let i = 0; i <= 99; i++) {
  for (let j = 0; j <= 99; j++) {
    freshOpcode[1] = i;
    freshOpcode[2] = j;

    for (let i = 0; i < freshOpcode.length - 1; i += 4) {
      const opcode = +freshOpcode[i];
      const pos1 = +freshOpcode[i + 1];
      const pos2 = +freshOpcode[i + 2];
      const loc = +freshOpcode[i + 3];

      if (opcode === 99) break;
      if (opcode == 1) freshOpcode[loc] = +freshOpcode[pos1] + +freshOpcode[pos2];
      if (opcode == 2) freshOpcode[loc] = +freshOpcode[pos1] * +freshOpcode[pos2];
    }

    if (freshOpcode[0] == 19690720) {
      console.log(`Noun: ${i}\nVerb: ${j}`);
      console.log(`Output: ${100 * i + j}`)
    }

    freshOpcode = [...data]
  }
}