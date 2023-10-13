import type { APIRoute } from 'astro';
import { aspectsController } from '../../../api/controllers/aspects.controllers';

export const GET:APIRoute = () =>  {
  return aspectsController.getAspectsList();
}