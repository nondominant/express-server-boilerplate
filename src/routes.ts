import * as express from 'express';
import { printit } from './components';

const router = express.Router();

router.get('/contact', (req: any, res: any) => {
  const call = new printit();
  call.A();
  res.status(200);
  res.send(); //may not require explicit "sending"
});

router.get('/noncontact', (req: any, res: any) => {
  const call = new printit();
  call.B();
  res.status(200);
  res.send(); //may not require explicit "sending"
});

module.exports = router;
