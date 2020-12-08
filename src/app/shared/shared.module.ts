import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdharPipe } from '../adharcard.pipe';

@NgModule({
    declarations:[
               AdharPipe    
    ],
    exports:[
        CommonModule,FormsModule, AdharPipe
    ]
})
export class SharedModule{

}