export function createRows(data, columns) {
    const rows = Math.floor(data.length / columns); // [A]
    let lastRowElements = data.length - rows * columns; // [B]
    while (lastRowElements !== columns) { // [C]
      data.push({ // [D]
        id: 'BRL',
        rate: `empty`,
        empty: true
      });
      lastRowElements += 1; // [E]
    }
    return data; // [F]
  }