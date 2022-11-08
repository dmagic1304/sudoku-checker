import SudokuBoard from './../src/SudokuBoard.js';

describe('SudokuBoard', () => {

  let sudokuboard;

  beforeEach(() => {
    sudokuboard = new SudokuBoard(3);
  });

  test('Sudoku board constructor', () => {
    expect(sudokuboard.size).toEqual(3);
  });

  test('test to see if value was input to board', () => {
    sudokuboard.addValue(0,0,1);
    expect(sudokuboard.array[0][0]).toEqual(1);
  });

  test('test to see if row has no duplicate values', () => {
    sudokuboard.addValue(0,0,1);
    sudokuboard.addValue(0,1,2);
    sudokuboard.addValue(0,2,3);
    console.log(sudokuboard.array.toString());
    expect(sudokuboard.checkRow(0)).toEqual(true);
  });

  test('test to see if row has no duplicate values', () => {
    sudokuboard.addValue(0,0,1);
    sudokuboard.addValue(0,1,2);
    sudokuboard.addValue(0,2,2);
    console.log(sudokuboard.array.toString());
    expect(sudokuboard.checkRow(0)).toEqual(false);
  });

  test('test to see if column has no douplicate values', () => {
    sudokuboard.array[0][0] = 1;
    sudokuboard.array[1][0] = 2;
    sudokuboard.array[2][0] = 3;
    console.log(sudokuboard.array.toString());
    expect(sudokuboard.checkColumn(0)).toEqual(true);
  });

  test('test to see if column has no douplicate values', () => {
    sudokuboard.array[0][0] = 1;
    sudokuboard.array[1][0] = 2;
    sudokuboard.array[2][0] = 2;
    console.log(sudokuboard.array.toString());
    expect(sudokuboard.checkColumn(0)).toEqual(false);
  });

  test('test to see if the whole board passes', () => {        
    expect(sudokuboard.checkBoard()).toEqual(false);
  });

  test('test to see if the whole board passes', () => {
    sudokuboard.array = [
    [1,2,3],
    [2,3,1],
    [3,1,2]
  ]
    expect(sudokuboard.checkBoard()).toEqual(true);
  });

  // test('', () => {
  //   expect().toEqual();
  // });
});