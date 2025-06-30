import { Router } from 'express';

import {
  periodTrackingController,
  trackerDataController,
  waterUpdateController,
} from '../controllers/periodTracking.controller.js';
import { requireAuth } from '@clerk/express';

const route = Router();

route.post('/trackerdata', requireAuth(), trackerDataController);
route.get('/periodtracking/:userId', requireAuth(), periodTrackingController);
route.get('/waterupdate/:userId', requireAuth(), waterUpdateController);

export default route;
