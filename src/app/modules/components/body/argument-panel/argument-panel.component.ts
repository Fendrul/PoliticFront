import {Component, OnInit} from '@angular/core';
import {ArgumentService} from "../../../../shared/services/argument.service";
import {Argument} from "../../../../shared/models/Argument";

@Component({
  selector: 'app-argument-panel',
  templateUrl: './argument-panel.component.html',
  styleUrls: ['./argument-panel.component.scss']
})
export class ArgumentPanelComponent implements OnInit{
  arguments!: Argument[];
  constructor(private argumentService: ArgumentService) { }

  ngOnInit() {
    this.argumentService.getArguments(10).subscribe((data) => {
      console.log(data);
      this.arguments = data;
    });
  }
}
