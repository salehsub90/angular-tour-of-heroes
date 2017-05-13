import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable() //emit metadata about the service
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
              .then(heroes => heroes.find(hero => hero.id === id));
  }

  // getHeroesSlowly(): Promise<Hero[]> {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(this.getHeroes()), 0);
  //   })
  // }
}
