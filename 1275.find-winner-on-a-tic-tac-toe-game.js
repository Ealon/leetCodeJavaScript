/*
 * @lc app=leetcode id=1275 lang=javascript
 *
 * [1275] Find Winner on a Tic Tac Toe Game
 *
 * https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/description/
 *
 * algorithms
 * Easy (52.80%)
 * Likes:    295
 * Dislikes: 93
 * Total Accepted:    24.6K
 * Total Submissions: 46.5K
 * Testcase Example:  '[[0,0],[2,0],[1,1],[2,1],[2,2]]'
 *
 * Tic-tac-toe is played by two players A and B on a 3 x 3 grid.
 *
 * Here are the rules of Tic-Tac-Toe:
 *
 *
 * Players take turns placing characters into empty squares (" ").
 * The first player A always places "X" characters, while the second player B
 * always places "O" characters.
 * "X" and "O" characters are always placed into empty squares, never on filled
 * ones.
 * The game ends when there are 3 of the same (non-empty) character filling any
 * row, column, or diagonal.
 * The game also ends if all squares are non-empty.
 * No more moves can be played if the game is over.
 *
 *
 * Given an array moves where each element is another array of size 2
 * corresponding to the row and column of the grid where they mark their
 * respective character in the order in which A and B play.
 *
 * Return the winner of the game if it exists (A or B), in case the game ends
 * in a draw return "Draw", if there are still movements to play return
 * "Pending".
 *
 * You can assume that moves is valid (It follows the rules of Tic-Tac-Toe),
 * the grid is initially empty and A will play first.
 *
 *
 * Example 1:
 *
 *
 * Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
 * Output: "A"
 * Explanation: "A" wins, he always plays first.
 * "X  "    "X  "    "X  "    "X  "    "X  "
 * "   " -> "   " -> " X " -> " X " -> " X "
 * "   "    "O  "    "O  "    "OO "    "OOX"
 *
 *
 * Example 2:
 *
 *
 * Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
 * Output: "B"
 * Explanation: "B" wins.
 * "X  "    "X  "    "XX "    "XXO"    "XXO"    "XXO"
 * "   " -> " O " -> " O " -> " O " -> "XO " -> "XO "
 * "   "    "   "    "   "    "   "    "   "    "O  "
 *
 *
 * Example 3:
 *
 *
 * Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
 * Output: "Draw"
 * Explanation: The game ends in a draw since there are no moves to make.
 * "XXO"
 * "OOX"
 * "XOX"
 *
 *
 * Example 4:
 *
 *
 * Input: moves = [[0,0],[1,1]]
 * Output: "Pending"
 * Explanation: The game has not finished yet.
 * "X  "
 * " O "
 * "   "
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= moves.length <= 9
 * moves[i].length == 2
 * 0 <= moves[i][j] <= 2
 * There are no repeated elements on moves.
 * moves follow the rules of tic tac toe.
 *
 */

// @lc code=start
/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = function (moves) {
  const { length } = moves;
  if (length < 5) return 'Pending';

  const board = [[], [], []];

  const isVictory = (x, y, mark) => {
    if (board[x][0] === mark && board[x][1] === mark && board[x][2] === mark) {
      return true;
    }
    if (board[0][y] === mark && board[1][y] === mark && board[2][y] === mark) {
      return true;
    }

    if (
      x === y &&
      board[0][0] === mark &&
      board[1][1] === mark &&
      board[2][2] === mark
    ) {
      return true;
    }

    if (
      x + y === 2 &&
      board[0][2] === mark &&
      board[1][1] === mark &&
      board[2][0] === mark
    ) {
      return true;
    }
    return false;
  };

  for (let i = 0; i < length; i++) {
    // * mark, stone, piece, chessman
    const mark = i % 2 ? 'O' : 'X';
    const [x, y] = moves[i];
    board[x][y] = mark;
    const res = isVictory(x, y, mark);

    if (i === 8 && !res) return 'Draw';

    if (res && i > 3) return mark === 'X' ? 'A' : 'B';
  }

  return 'Pending';
};

// @lc code=end

const moves1 = [
  [0, 0],
  [2, 0],
  [1, 1],
  [2, 1],
  [2, 2],
]; // ! A wins

const moves2 = [
  [0, 0],
  [1, 1],
  [0, 1],
  [0, 2],
  [1, 0],
  [2, 0],
];

const moves95 = [
  [0, 0],
  [1, 1],
  [2, 0],
  [1, 0],
  [1, 2],
  [2, 1],
  [0, 1],
  [0, 2],
  [2, 2],
]; // Draw

console.log(tictactoe(moves95));
