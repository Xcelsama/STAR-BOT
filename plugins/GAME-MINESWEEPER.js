class Minesweeper {
  constructor(rows, cols, mines) {
    this.rows = rows;
    this.cols = cols;
    this.mines = mines;
    this.board = this.initializeBoard();
    this.revealed = this.initializeRevealed();
    this.placeMines();
    this.calculateNumbers();
    this.gameOver = false;
  }

  initializeBoard() {
    return Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
  }

  initializeRevealed() {
    return Array.from({ length: this.rows }, () => Array(this.cols).fill(false));
  }

  placeMines() {
    let minesPlaced = 0;
    while (minesPlaced < this.mines) {
      const row = Math.floor(Math.random() * this.rows);
      const col = Math.floor(Math.random() * this.cols);
      if (this.board[row][col] !== 'M') {
        this.board[row][col] = 'M';
        minesPlaced++;
      }
    }
  }

  calculateNumbers() {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], /*M*/  [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (this.board[row][col] === 'M') continue;
        let mineCount = 0;
        directions.forEach(([dx, dy]) => {
          const newRow = row + dx;
          const newCol = col + dy;
          if (newRow >= 0 && newRow < this.rows && newCol >= 0 && newCol < this.cols) {
            if (this.board[newRow][newCol] === 'M') mineCount++;
          }
        });
        this.board[row][col] = mineCount;
      }
    }
  }

  reveal(row, col) {
    if (isNaN(row) || isNaN(col)) {
      return 'Invalid input. Row and column must be numbers.';
    }
    if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) {
      return 'Invalid move. Row and column must be within the board boundaries.';
    }
    if (this.revealed[row][col]) {
      return 'Invalid move. Cell already revealed.';
    }
    if (this.gameOver) {
      return 'Game over. Start a new game.';
    }

    this.revealed[row][col] = true;
    if (this.board[row][col] === 'M') {
      this.gameOver = true;
      this.revealAll();
      return 'You hit a mine! Game over.';
    }
    if (this.board[row][col] === 0) {
      const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], /*M*/  [0, 1],
        [1, -1], [1, 0], [1, 1]
      ];
      directions.forEach(([dx, dy]) => {
        this.reveal(row + dx, col + dy);
      });
    }
    return 'Keep going!';
  }

  revealAll() {
    this.revealed = this.revealed.map(row => row.map(() => true));
  }

  display() {
    const emojis = ['⬛', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
    return this.board.map((row, rowIndex) => 
      row.map((cell, colIndex) => 
        this.revealed[rowIndex][colIndex] ? (cell === 'M' ? '💣' : emojis[cell]) : '⬜️').join('')
    ).join('\n');
  }
}

// Integrate Minesweeper with the bot
const handler = async (m, { conn, command, text }) => {
  if (!global.minesweeper) {
    global.minesweeper = new Minesweeper(8, 8, 10); // Create a new game with 8x8 board and 10 mines
  }

  if (command === 'mine') {
    conn.reply(m.chat, 'Minesweeper game started!\n\n' + global.minesweeper.display(), m);
  } else if (command.startsWith('reveal')) {
    const args = text.split(' ');

    // Check if the correct number of arguments is provided
    if (args.length !== 3) {
      conn.reply(m.chat, 'Usage: reveal <row> <col>\nExample: reveal 1 1', m);
      return;
    }

    const rowNum = parseInt(args[1]);
    const colNum = parseInt(args[2]);

    // Check if parsed arguments are valid numbers
    if (isNaN(rowNum) || isNaN(colNum)) {
      conn.reply(m.chat, 'Please provide valid numbers for row and column.\nUsage: reveal <row> <col>\nExample: reveal 1 1', m);
      return;
    }

    const result = global.minesweeper.reveal(rowNum, colNum);
    conn.reply(m.chat, result + '\n\n' + global.minesweeper.display(), m);
  }
};

handler.help = ['mine', 'reveal <row> <col>'];
handler.tags = ['game'];
handler.command = ['mine', 'reveal'];
handler.rowner = true;

export default handler;