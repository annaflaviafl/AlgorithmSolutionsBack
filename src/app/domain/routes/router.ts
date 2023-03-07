import { Router } from "express";
import { mazeController, nQueenController, sudokuController } from "../../controller";
import { swaggerUi, swaggerDocument } from '../../../swagger';
import cors from 'cors';

const router: Router = Router();

//Routes

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    router.use(cors());
    next();
});
router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));
router.get("/nqueen/:numberQueens", nQueenController.getNumberQueens);
router.get("/sudoku/:board", sudokuController.getBoard);
router.get("/sudokuGenerator/", sudokuController.getGenerator);
router.get("/maze/:maze", mazeController.getMaze);

export { router };
