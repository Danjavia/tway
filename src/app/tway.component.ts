import { Component } from '@angular/core';
import { LoginComponent } from './+login';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'tway-app',
    templateUrl: 'tway.component.html',
    styleUrls: ['tway.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/login', component: LoginComponent}
])
export class TwayAppComponent {

    public title:string
    public n1:number
    public n2:number
    public n3:number
    public results:string

    constructor () {
        this.title = 'tway! : Play and earn real money';
    }

    play ( event ) {

        event.preventDefault()

        this.n1 = Math.floor( ( Math.random() * 10 ) + 1 )
        this.n2 = Math.floor( ( Math.random() * 10 ) + 1 )
        this.n3 = Math.floor( ( Math.random() * 10 ) + 1 )

        this.results = `${this.n1} ${this.n2} ${this.n3}`
    }
}
