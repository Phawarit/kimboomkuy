import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestGetComponent } from './test-get/test-get.component';



@NgModule({
  declarations: [
    TestGetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestGetComponent
  ]
})
export class TestModule { }
