import type { APIRoute } from 'astro';
import { gameModesController } from '../../../api/controllers/gameModes.controllers';

export const GET:APIRoute = () =>  {
  return gameModesController.getGameModesList();
}