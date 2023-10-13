import type { APIRoute } from 'astro';
import { encountersController } from '../../../api/controllers/encounters.controllers';

export const GET:APIRoute = () =>  {
  return encountersController.getEncountersList();
}