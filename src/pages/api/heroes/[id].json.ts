import type { APIRoute } from 'astro';
import { heroesController } from '../../../api/controllers/heroes.controllers';

export async function GET({ params }): Promise<APIRoute> {
  return heroesController.getHeroById(params);
}