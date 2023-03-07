import { Request, Response } from 'express';
import { SudokuGenerator } from '../domain/entities/SudokuGeneratorSolver';
import { SudokuSolver } from '../domain/entities/SudokuSolver';

class SudokuController {
    public getBoard(req: Request, res: Response): void {
        const board = JSON.parse(req.params.board) as number[][];
        const copy = JSON.parse(JSON.stringify(board));

        const solver = new SudokuSolver(copy);
        solver.solveSudoku(copy, 0, 0);

        res.status(200).json({ solver });
    }

    public getGenerator(req: Request, res: Response): void {
        const generator = new SudokuGenerator(9, 20);
        generator.fillValues();

        res.status(200).json({ generator });
    }
}

export const sudokuController = new SudokuController();
