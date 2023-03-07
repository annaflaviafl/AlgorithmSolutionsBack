interface Cell {
    row: number;
    col: number;
}

export class SudokuSolver {
    private N = 9;
    private grid: number[][];

    constructor(grid: number[][]) {
        this.grid = grid;
    }

    solveSudoku(grid: number[][], row: number, col: number): boolean {

        if (row == this.N - 1 && col == this.N)
            return true;

        if (col == this.N) {
            row++;
            col = 0;
        }

        if (this.grid[row][col] != 0)
            return this.solveSudoku(this.grid, row, col + 1);

        for (let num = 1; num < 10; num++) {
            if (this.isSafe(this.grid, row, col, num)) {
                this.grid[row][col] = num;
                if (this.solveSudoku(this.grid, row, col + 1))
                    return true;
            }
            this.grid[row][col] = 0;
        }
        return false;
    }

    print() {
        for (let i = 0; i < this.N; i++) {
            for (let j = 0; j < this.N; j++)
                console.log(this.grid[i][j] + " ");

            console.log("<br>");
        }
    }

    isSafe(grid: number[][], row: number, col: number, num: number) {

        for (let x = 0; x <= 8; x++)
            if (this.grid[row][x] == num)
                return false;

        for (let x = 0; x <= 8; x++)
            if (this.grid[x][col] == num)
                return false;

        let startRow = row - row % 3,
            startCol = col - col % 3;

        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++)
                if (this.grid[i + startRow][j + startCol] == num)
                    return false;

        return true;
    }
}
