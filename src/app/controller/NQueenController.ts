import { Request, Response } from 'express';
import { NQueenSolver } from '../domain/entities/NQueenSolver';

class NQueenController {
    public getNumberQueens(req: Request, res: Response): void {
        const numberQueens = parseInt(req.params.numberQueens);
        if (isNaN(numberQueens)) {
            res.status(400).send('O tamanho do tabuleiro deve ser um número.');
        } else {
            const solver = new NQueenSolver(numberQueens);
            const solution = solver.solve();
            res.status(200).json({ solution });
        }
    }
}

export const nQueenController = new NQueenController();
