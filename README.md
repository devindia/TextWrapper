# About

This package helps you to implement "Read More" or "See More" and "Read Less" or "See Less" on a long string while displaying on UI.

# Update

Type definitions have been added. It will work seamless with latest angular versions.

# Demo

![ReadMore_ReadLess](https://user-images.githubusercontent.com/20151781/135718540-ccba9b6f-04e7-4a33-82ef-5c388b52be76.gif)

# Installation

`npm i angular-textwrapper --save`

Then...

in your demo.component.ts file 

```
import { Component, OnInit } from '@angular/core';
import  * as textwrapper from 'angular-textwrapper';

@Component({
  selector: 'demo-root',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  longText:any = `Altos Odyssey is a characteristic decision for a free Android game. It highlights straightforward mechanics, beautiful illustrations, and a loosening up style. Players ski down a slope while keeping away from snags and making monstrous hops. There are additionally things to gather that can be exchanged for different customization alternatives. The game depends intensely on its backdrop commendable designs.`

    constructor(){}

    ngOnInit(){
      this.readLess('span_id1','span_id2');
    }

    readMore(span_id1:any,span_id2:any){
      textwrapper.seeMore(span_id1,span_id2);
    }

    readLess(span_id1:any,span_id2:any){
      textwrapper.seeLess(span_id1,span_id2);
    }
}



```

Then...
in your demo.component.html file

here longText.slice(0,200) means only first 200 character will apear on UI. Rest will apear if we click on 'Read More' 

```
<div>
  <span id="span_id1" >{{longText.slice(0,200)}} ... <span (click)="readMore('span_id1','span_id2')" style="cursor:pointer;color:blue">Read More</span></span>
  <span id="span_id2">{{longText}}<span (click)="readLess('span_id1','span_id2')" style="cursor:pointer;color:blue">Read Less</span></span>
</div>

```

# Options

* textwrapper.seeMore(element_id1,element_id2)
* textwrapper.seeLess(element_id1,element_id2)

# miscellaneous

If you like this package do follow me on github.

