export class NQueenSolver {
    private size: number;
    private board: number[];

    constructor(size: number) {
        this.size = size;
        this.board = new Array(this.size);
    }

    public solve(): number[] {
        this.placeQueens(0);
        return this.board;
    }

    private placeQueens(row: number): boolean {
        if (row === this.size) {
            return true; // todas as rainhas foram colocadas
        }

        for (let col = 0; col < this.size; col++) {
            if (this.isSafe(row, col)) {
                this.board[row] = col; // coloca a rainha na posição (row, col)
                if (this.placeQueens(row + 1)) {
                    return true; // solução encontrada
                }
            }
        }

        return false; // não foi possível colocar uma rainha nesta linha
    }

    private isSafe(row: number, col: number): boolean {
        for (let i = 0; i < row; i++) {
            const queenCol = this.board[i];
            const sameColumn = queenCol === col;
            const diagonal = queenCol - col === i - row || queenCol - col === row - i;
            if (sameColumn || diagonal) {
                return false; // encontrou outra rainha na mesma coluna ou diagonal
            }
        }
        return true; // não há rainhas ameaçando esta posição
    }
}