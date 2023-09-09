import type { APIRoute } from 'astro';
import { heroesController } from '../../api/controllers/heroes.controllers';

export async function GET(): Promise<APIRoute> {
  return heroesController.getHeroesList();
}

// WIP
export async function POST({ params, request }): Promise<APIRoute> {
  return heroesController.createHero(request);
}