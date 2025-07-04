// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent {

// }


import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

/**
 * @title Card overview
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [MatCardModule, MatButtonModule , FormsModule, MatFormFieldModule, MatInputModule,  MatDividerModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}
