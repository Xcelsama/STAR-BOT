const handler = {
  board: null,
  gameStarted: false,
  flaggedCells: [],

  mine: async (message) => {
    if (handler.gameStarted) {
      message.reply("A game is already in progress. Use 'reset' to start a new game.");
      return;
    }

    handler.board = [];
    const rows = 10;
    const cols = 10;
    const mines = 10;

    for (let i = 0; i < rows; i++) {
      handler.board[i] = [];
      for (let j = 0; j < cols; j++) {
        handler.board[i][j] = 0; // 0 = empty, 1 = mine
      }
    }

    for (let i = 0; i < mines; i++) {
      let row = Math.floor(Math.random() * rows);
      let col = Math.floor(Math.random() * cols);
      handler.board[row][col] = 1;
    }

    handler.gameStarted = true;
    handler.flaggedCells = [];

    message.reply(`Minesweeper game started! Use 'reveal <row> <col>' to play or 'flag <row> <col>' to flag a cell.`);
    message.reply(`Board: ${handler.displayBoard()}`);
  },

  reveal: async (message, row, col) => {
    if (!handler.gameStarted) {
      message.reply("No game in progress. Use 'mine' to start a new game.");
      return;
    }

    row = parseInt(row);
    col = parseInt(col);

    if (handler.board[row][col] === 1) {
      message.reply(`Game Over! You hit a mine!`);
      handler.gameStarted = false;
    } else {
      let count = 0;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          let r = row + x;
          let c = col + y;
          if (r >= 0 && r < handler.board.length && c >= 0 && c < handler.board[0].length && handler.board[r][c] === 1) {
            count++;
          }
        }
      }
      message.reply(`You revealed a cell with ${count} adjacent mines!`);
      message.reply(`Board: ${handler.displayBoard()}`);
    }
  },

  flag: async (message, row, col) => {
    if (!handler.gameStarted) {
      message.reply("No game in progress. Use 'mine' to start a new game.");
      return;
    }

    row = parseInt(row);
    col = parseInt(col);

    if (handler.flaggedCells.includes(`${row},${col}`)) {
      handler.flaggedCells = handler.flaggedCells.filter(cell => cell !== `${row},${col}`);
      message.reply(`Cell unflagged!`);
    } else {
      handler.flaggedCells.push(`${row},${col}`);
      message.reply(`Cell flagged!`);
    }

    message.reply(`Board: ${handler.displayBoard()}`);
  },

  reset: async (message) => {
    handler.board = null;
    handler.gameStarted = false;
    handler.flaggedCells = [];

    message.reply("Game reset. Use 'mine' to start a new game.");
  },

  displayBoard: () => {
    let boardStr = "";
    for (let i = 0; i < handler.board.length; i++) {
      for (let j = 0; j < handler.board[0].length; j++) {
        if (handler.flaggedCells.includes(`${i},${j}`)) {
          boardStr += "F ";
        } else if (handler.board[i][j] === 1) {
          boardStr += "X ";
        } else {
          boardStr += "_ ";
        }
      }
      boardStr += "\n";
    }
    return boardStr;
  }
};

handler.help = ['mine', 'reveal <row> <col>', 'flag <row> <col>', 'reset'];
handler.tags = ['game'];
handler.command = ['mine', 'reveal', 'flag', 'reset'];
handler.rowner = true;

export default handler;