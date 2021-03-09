export class TicTacToeGame {
    player: 'X' | 'O';
    board: string[][];
    constructor() {
        this.board = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-'],
        ];
        this.player = 'X';
    }

    play = (x: 0 | 1 | 2, y: 0 | 1 | 2) => {
        this.board[x][y] = this.player;
        this.switchPlayer();
        return this.board;
    };

    private switchPlayer() {
        switch (this.player) {
            case 'X':
                this.player = 'O';
                break;
            case 'O':
                this.player = 'X';
                break;
        }
    }
}
