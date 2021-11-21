import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController, Platform, PopoverController } from '@ionic/angular';
import { AlertOptions } from '@ionic/core';
import { SettingsPopoverComponent } from '../settings-popover/settings-popover.component';

@Component({
  selector: 'app-new-roast',
  templateUrl: './new-roast.component.html',
  styleUrls: ['./new-roast.component.scss'],
})
export class NewRoastComponent implements OnInit {

  @Input('beans') public beans: Array<any>;

  selectedBean: any;
  selectOpts: AlertOptions = {
    cssClass: 'select-origin-alert'
  }
  initialProps: string[] = ['temp', 'airflow', 'duration', 'feedTime', 'floorTemp', 'floorTime'];
  peakProps: string[] = ['peakTemp', 'peakTempTime'];
  finalProps: string[] = [ 'finalTemp', 'timeAdjustment'];
  newRoastForm: FormGroup = this.fb.group({
    selectedBeanIndex: [0],
    initial: this.fb.array([
      this.fb.group({ temp: [190] }),
      this.fb.group({ airflow: [220] }),
      this.fb.group({ duration: ['22:00'] }),
      this.fb.group({ feedTime: [] }),
      this.fb.group({ floorTemp: [] }),
      this.fb.group({ floorTime: [] })
    ]),
    peak: this.fb.array([
      this.fb.group({ peakTemp: [] }),
      this.fb.group({ peakTempTime: [] })
    ]),
    final: this.fb.array([
      this.fb.group({ finalTemp: [] }),
      this.fb.group({ timeAdjustment: [] })
    ]),
    settings: this.fb.group({
      autoCracker: [true],
      airflow: [0],
      drumSpeed: [0],
      gas: [0],
      verticalWinnower: [true]
    })
  });

  constructor(public platform: Platform, 
              private modalCtrl: ModalController, 
              private popoverCtrl: PopoverController, 
              private fb: FormBuilder) { 
    
  }

  ionViewDidEnter() {
    //this.selectedBean = this.beans[0];
  }
  ngOnInit() {
    this.selectedBean = this.beans[0];
    
    //this.addInitialSetting('temp', 190);
    const arr = this.getInitialArray().controls.map((control) => {
      for (let prop in control.value) { return prop }
    });
    console.log('arr', arr)
    //console.log('log', this.getInitialArray().controls.forEach((control) => control.value))
    /* const initial = this.fb.group({
      temp: [190],
      airflow: [220],
      duration: ['22:00'],
      feedTime: [],
      floorTemp: [],
      floorTime: [],
    }); */
    /* const peak = this.fb.group({
      peakTemp: [],
      peakTempTime: [],
    }); */
    /* const final = this.fb.group({
      finalTemp: [],
      timeAdjustment: []
    }) */
    /* this.newRoastForm = this.fb.group({
      selectedBeanIndex: [0],
      initial,
      peak,
      final,
      settings
    }) */
  }

  getInitialArray() {
    return (this.newRoastForm.get('initial') as FormArray)
  }

  getPeakArray() {
    return (this.newRoastForm.get('peak') as FormArray)
  }

  getFinalArray() {
    return (this.newRoastForm.get('final') as FormArray)
  }

  async presentSettingsPopover(event: any) {
    const { autoCracker, 
            airflow, 
            gas, 
            drumSpeed, 
            verticalWinnower } = this.newRoastForm.get('settings').value;
    const popover = await this.popoverCtrl.create({
      component: SettingsPopoverComponent,
      componentProps: {
        autoCracker, airflow, gas, drumSpeed, verticalWinnower
      },
      dismissOnSelect: false,
      backdropDismiss: true,
      //align: 'end',
      //side: 'bottom',
      size: 'cover',
      event,
      cssClass: 'new-roast-settings'
    });
    await popover.present();
    const { data, role } = await popover.onDidDismiss();
    if (!!data && !!role) {
      console.log(data, role);
    }
  }

  

  async dismiss() {
    const top = await this.modalCtrl.getTop();
    if (top) await top.dismiss();
  }

  logAccordion(event: any) {
    const { value } = event.detail;
    console.log(value)
  }

}
