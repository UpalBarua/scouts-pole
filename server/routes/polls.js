import { Router } from 'express';
import {
  createPoll,
  deletePoll,
  getPollById,
  getPolls,
  updatePoll,
  updatePollVotes,
} from '../controllers/polls-controllers.js';

const router = new Router();

router.post('/', createPoll);
router.get('/', getPolls);
router.get('/:pollId', getPollById);
router.patch('/:pollId', updatePollVotes);
router.put('/:pollId', updatePoll);
router.delete('/:pollId', deletePoll);

export default router;
