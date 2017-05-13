import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
  //title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  //dependency injection
  constructor(
    private heroService: HeroService, 
    private router: Router) { }

  getHeroes(): void { // So now this needs to act on promise using 'then'
    //this.heroes = this.heroService.getHeroes()); ===> to
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  // getHeroesSlowly(): void { // So now this needs to act on promise using 'then'
  //   //this.heroes = this.heroService.getHeroes()); ===> to
  //   this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  // }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
