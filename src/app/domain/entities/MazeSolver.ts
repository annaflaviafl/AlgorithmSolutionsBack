export class MazeSolver {
    private N: number;

    constructor(private maze: number[][]) {
        this.N = maze.length;
    }

    private printSolution(sol: number[][]) {
        for (let i = 0; i < this.N; i++) {
            for (let j = 0; j < this.N; j++)
                console.log(" " + sol[i][j] + " ");
            console.log("\n");
        }
    }

    private isSafe(x: number, y: number, maze: number[][], sol: number[][]) {
        return (
            x >= 0 &&
            x < this.N &&
            y >= 0 &&
            y < this.N &&
            maze[x][y] == 1 &&
            sol[x][y] == 0
        );
    }

    private solveMazeUtil(
        x: number,
        y: number,
        maze: number[][],
        sol: number[][]
    ) {
        if (x == this.N - 1 && y == this.N - 1 && maze[x][y] == 1) {
            sol[x][y] = 1;
            return true;
        }

        if (this.isSafe(x, y, maze, sol)) {
            sol[x][y] = 1;

            if (this.solveMazeUtil(x + 1, y, maze, sol)) return true;

            if (this.solveMazeUtil(x, y + 1, maze, sol)) return true;

            if (this.solveMazeUtil(x - 1, y, maze, sol)) return true;

            if (this.solveMazeUtil(x, y - 1, maze, sol)) return true;

            sol[x][y] = 0;
            return false;
        }

        return false;
    }

    public solve() {
        const sol: number[][] = [];
        for (let i = 0; i < this.N; i++) {
            sol[i] = [];
            for (let j = 0; j < this.N; j++) {
                sol[i][j] = 0;
            }
        }

        if (!this.solveMazeUtil(0, 0, this.maze, sol)) {
            console.log("Solution doesn't exist");
            return false;
        }

        this.printSolution(sol);
        return sol;
    }
}
