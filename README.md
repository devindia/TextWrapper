# About TextWrapper

This package helps you to implement "Read More" or "See More" and "Read Less" or "See Less" on a long string while displaying on UI.

# installation

`npm i TextWrapper --save`

Then...

in your demo.component.ts file 

```
import { TextWrapper } from 'TextWrapper';

export class DemoComponent implements OnInit {

    longText:any = `Altos Odyssey is a characteristic decision for a free Android game. It highlights straightforward mechanics, beautiful illustrations, and a loosening up style. Players ski down a slope while keeping away from snags and making monstrous hops. There are additionally things to gather that can be exchanged for different customization alternatives. The game depends intensely on its backdrop commendable designs.`

    constructor(private textWrapper : TextWrapper){}

    ngOnInit(){

    }

    readMore(){
        this.textWrapper.seeMore(span_id1,span_id2);
    }

    readLess(){
        this.textWrapper.seeLess(span_id1,span_id2);
    }



}


```

Then...
in your demo.component.html file

here longText.slice(0,200) means only first 200 character will apear on UI. Rest will apear if we click on 'Read More' 

```
<div>
    <span id="span_id1" >{{longText.slice(0,200)}} ...<span (click)="readMore()" style="cursor:pointer">Read More</span></span>
    <span id="span_id2">{{longText}}<span (click)="readLess()" style="cursor:pointer">Read Less</span></span>
</div>

```

## options

* textWrapper.seeMore(element_id1,element_id2)
* textWrapper.seeLess(element_id1,element_id2)