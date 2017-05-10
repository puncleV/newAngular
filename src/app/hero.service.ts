import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {
  async getHeroes(): Promise<Hero[]> {
    return HEROES;
  }
}
