import type { APIRoute } from 'astro';
import { villainsController } from '../../../api/controllers/villains.controllers';

export const GET:APIRoute = ({ params }) =>  {
    return villainsController.getVillainById(params);
}