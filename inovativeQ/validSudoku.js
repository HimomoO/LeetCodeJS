/**
 * Created by HimomoO on 11/19/15.
 */
/**
 * Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

 The Sudoku board could be partially filled, where empty cells are filled with the character '.'.


 A partially filled sudoku which is valid.

 Note:
 A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.

 */

/**
 * Solution 1: 232ms.使用三个二维数组来存储存在的ture值，如果遍历时候遇上之前存在的数为true，则return false；否则设置为true、
 * 需要注意37，38行parseInt
 * block则把它转换成横向0，1，2，3的数组
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var row = new Array(9),col = new Array(9),block = new Array(9);
    for(var i = 0; i < 9; i++){
        if(typeof row[i] == 'undefined') row[i] = new Array(9);
        if(typeof col[i] == 'undefined') col[i] = new Array(9);
        if(typeof block[i] == 'undefined') block[i] = new Array(9);
    }

    for(var i = 0; i < 9; i++){
            for(var j = 0; j < 9; j++) {
                var c = board[i][j] - '1';
                if (board[i][j] == '.') continue;
                //console.log(typeof (i - i % 3 + j ));
                //console.log('block[' + parseInt(i - i % 3 + j / 3) + '][' + c + ']');
                if (row[i][c] || col[j][c] || block[parseInt(i - i % 3 + j / 3)][c]) return false;
                row[i][c] = col[j][c] = block[parseInt(i - i % 3 + j / 3)][c] = true;

            }
    }
    console.log(block);
    return true;
};

var b = [
    ['5','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
];

console.log(isValidSudoku(b));