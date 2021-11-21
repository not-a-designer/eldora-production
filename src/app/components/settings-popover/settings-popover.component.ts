import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-settings-popover',
  templateUrl: './settings-popover.component.html',
  styleUrls: ['./settings-popover.component.scss'],
})
export class SettingsPopoverComponent implements OnInit {

  @Input('autoCracker') public autoCracker: boolean;
  @Input('airflow') public airflow: number;
  @Input('drumSpeed') public drumSpeed: number;
  @Input('gas') public gas: number;
  @Input('veticalWinnower') public verticalWinnower: boolean;

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

}
