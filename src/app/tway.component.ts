import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tway-app',
    templateUrl: 'tway.component.html',
    styleUrls: ['tway.component.css']
})
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
