import { TicTacToeGame } from '../main/ticTacToe';
describe.skip('[ticTacToe]', () => {
    it('should return ticTacToe board with X playing first', () => {
        const ticTacToeGame = new TicTacToeGame();
        expect(ticTacToeGame.play(0, 0)).toEqual([
            ['X', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-'],
        ]);
    });

    it('should return ticTacToe board with O playing second', () => {
        const ticTacToeGame = new TicTacToeGame();
        ticTacToeGame.play(0, 0);
        expect(ticTacToeGame.play(0, 1)).toEqual([
            ['X', 'O', '-'],
            ['-', '-', '-'],
            ['-', '-', '-'],
        ]);
    });

    it('should return ticTacToe board with X playing third', () => {
        const ticTacToeGame = new TicTacToeGame();
        ticTacToeGame.play(0, 0);
        ticTacToeGame.play(0, 1);
        expect(ticTacToeGame.play(0, 2)).toEqual([
            ['X', 'O', 'X'],
            ['-', '-', '-'],
            ['-', '-', '-'],
        ]);
    });
});
