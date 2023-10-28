import type { APIRoute } from 'astro';
import { gamesController } from '../../../api/controllers/games.controllers';

export const GET:APIRoute = ({ params }) =>  {
    return gamesController.getGameByUserId(params);
}