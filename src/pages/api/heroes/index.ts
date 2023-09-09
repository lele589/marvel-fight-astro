import type { APIRoute } from 'astro';
import { heroesController } from '../../../api/controllers/heroes.controllers';

export const GET:APIRoute = () =>  {
  return heroesController.getHeroesList();
}

// WIP
export const POST:APIRoute = ({ params, request}) =>  {
  return heroesController.createHero(request);
}