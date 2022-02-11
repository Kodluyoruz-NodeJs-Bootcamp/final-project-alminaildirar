import * as express from 'express'
import { verifyToken } from '../middlewares/verifyToken';
import { addFilm, getFilm, getAllFilms, getMyFilms, likeFilm} from '../controllers/filmController';
import { getAddFilm } from '../controllers/pageController';
import { RequestHandler } from 'express';




//http://localhost:5000//film/
const router = express.Router();

router.get('/films', verifyToken, getAllFilms)
router.get('/my-films', verifyToken, getMyFilms)
router.get('/add-film', verifyToken, getAddFilm)
router.post('/add-film', verifyToken, addFilm)
router.get('/like/:id/:src', verifyToken, likeFilm)



router.get('/:id', verifyToken, getFilm)



const filmRouter = router;
export default filmRouter;