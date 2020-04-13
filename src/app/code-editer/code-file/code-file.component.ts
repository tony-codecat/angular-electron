import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FxCodeFile, FxCodeLine, CodeLine } from '../fx/fx-code-block';
//import { SVG, Tspan } from '@svgdotjs/svg.js';
import * as d3 from "d3";
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-code-file',
  templateUrl: './code-file.component.html',
  styleUrls: ['./code-file.component.css']
})
export class CodeFileComponent implements OnInit {
  selectedText: string;
  codeFile: FxCodeFile;

  constructor() {

  }


  ngOnInit(): void {

    // let svg = SVG().addTo('#code').size(600, 800);
    // svg.on('onkeydown', (e) => { console.log(e); });

    // svg.rect(svg.width(), svg.height()).fill('#333');
    // let g = svg.group();
    // {
    //   let text = svg.text('')
    //     .fill(this.codeFile.option.textStyle.fontColor)
    //     .font({
    //       family: this.codeFile.option.textStyle.fontFamily,
    //       size: this.codeFile.option.textStyle.fontSize
    //     });
    //   text.attr('tabindex', 0);
    //   text.build(true);


    //   let sp1 = text.tspan('something dfdf').fill('#CCC').newLine();
    //   let sp2 = text.tspan('').newLine();
    //   let sp3 = text.tspan('1').newLine();
    //   let sp4 = text.tspan('112 werwer').newLine();
    //   let sp5 = text.tspan('34 34 555fdf');
    //   g.add(sp1);
    //   g.add(sp2);
    //   g.add(sp3);
    //   text.add(g);
    //   text.build(false);
    //   sp1.on('mousedown', () => { console.log(sp1.text()); });

    //   console.log(text.length());
    //   console.log(text.leading().value);

    // }

    let d3svg = d3.select('#code');

    var group = d3svg.append("g")
      .attr("width", "100%")
      .attr("height", "100%")
      .style("stroke", "red")
      .style("fill", "none");

    let text = group.append("text").attr("y", "0")
      .attr("font-size", 12)
      .attr("dy", "1em")
      .attr("id", "text_id")
      .style('fill', 'black');
    let tspan1 = text.append('tspan')
      .attr("id", "tspan1_id");
    tspan1.text("This is a square");

    let tspan11 = text.append('tspan')
      .attr("id", "tspan1_id");
    tspan11.text("22This is a square");

    var boundingRect = d3svg.append("rect")
      .style("stroke", "pink")
      .style("fill", "none");

    var textSize = tspan1.node().getBoundingClientRect();

    console.log(textSize);

    boundingRect.attr("width", textSize.width)
      .attr("height", textSize.height);

    group.append("rect")
      .attr("x", textSize.width + 10)
      .attr("y", 10)
      .attr("height", textSize.height)
      .attr("width", textSize.height)
      .attr("id", "shape")
      .attr("fill", "blue");

    var text2 = group.append("text")
      .attr("x", textSize.width + textSize.height + 20)
      .attr("y", "0")
      .attr("font-size", 12)
      .attr("dy", "1em")
      .attr("id", "text2_id")
      .style('fill', 'black');

    var tspan2 = text2.append('tspan')
    tspan2.text("and this is a triangle");

  }


  showSelectedText(): void {
    console.log('sss');

  }

  onKeyPress(e: Event): void {
    console.log(e);
  }
}
