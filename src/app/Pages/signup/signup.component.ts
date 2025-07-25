import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserService } from '../../Services/user/user.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup; // Declare the form

  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      confirmPassword: ['', [Validators.required]],
      showPassword: [false],
      service: 'advanced'
    },
    );
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const { showPassword, confirmPassword, ...formData } = this.signUpForm.value;
      console.log('Form Submitted', formData);

      this.user.register(this.signUpForm.value).subscribe({
        next: (result: any) => {
          console.log('SignUp successful:', result);
          this.snackBar.open('SignUp Successful!', 'Close',
            {
              duration: 3000,
              panelClass: ['success-snackbar']
            });
        },
        error: () => {
          console.error('SignUp failed:');
          this.snackBar.open('SignUp failed!', 'Close', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      });
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }
}

