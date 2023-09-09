import type { APIRoute } from 'astro';
import { heroesController } from '../../../api/controllers/heroes.controllers';

export const GET:APIRoute = ({ params }) =>  {
    return heroesController.getHeroById(params);
}