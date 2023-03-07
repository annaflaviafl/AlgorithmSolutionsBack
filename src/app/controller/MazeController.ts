import { Request, Response } from 'express';
import { MazeSolver } from '../domain/entities/MazeSolver';

class MazeController {
    public getMaze(req: Request, res: Response): void {
        const mazeInput = JSON.parse(req.params.maze) as number[][];
        const mazeCopy = JSON.parse(JSON.stringify(mazeInput));
        const mazeSolver = new MazeSolver(mazeCopy);
        const solution = mazeSolver.solve();

        res.status(200).json({ solution });
    }
}

export const mazeController = new MazeController();
