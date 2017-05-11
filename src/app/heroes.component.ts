import { Component, OnInit } from '@angular/core';
import {Hero} from "./hero"
import { HeroService } from './hero.service';
import {Router} from "@angular/router";

@Component({
  selector: 'my-heroes',
  providers: [HeroService],
  templateUrl: './heroes.component.html',
  styleUrls: [
    "./heroes.component.css"
  ]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  name = 'Angular';

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  async getHeroes(): Promise<void> {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(["/detail", this.selectedHero.id]);
  }
}
