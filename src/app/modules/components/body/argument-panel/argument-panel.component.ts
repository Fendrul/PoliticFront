import {Component, OnInit} from '@angular/core';
import {ArgumentService} from "../../../../shared/services/argument.service";
import {Argument} from "../../../../shared/models/Argument";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-argument-panel',
  templateUrl: './argument-panel.component.html',
  styleUrls: ['./argument-panel.component.scss']
})
export class ArgumentPanelComponent implements OnInit{
  arguments!: Argument[];
  constructor(private argumentService: ArgumentService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
({arguments: fetchedArguments}) => {
        console.log(fetchedArguments)
        this.arguments = fetchedArguments;
    })
  }
}
