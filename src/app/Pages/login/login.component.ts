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
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  userForm!: FormGroup; // Declare the form

  constructor(private fb: FormBuilder, private user : UserService) {}

  ngOnInit(): void {
    // Initialize the form with validators
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);

      this.user.login(this.userForm.value).subscribe({
      next: (result: any) => 
      {
        console.log('Login successful:', result);

        //Normalize token to ensure "Bearer " prefix
        // Clean token and store it in localStorage
        let token = result.id;
        if (token.startsWith('Bearer ')) 
        {
          token = token.replace('Bearer ', '');
        }
      // Store the token in localStorage
        localStorage.setItem('Token', token);

        // this.snackBar.open('Login successful!', 'Close', 
        // {
        //   duration: 3000,
        //   panelClass: ['success-snackbar']
        // });

        // this.router.navigate(['/dashboard']);
      },
      error: () => {
        console.error('Login failed:');

        // this.snackBar.open('Login failed!', 'Close', {
        //   duration: 3000,
        //   panelClass: ['error-snackbar']
        // });
      }
    });

    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
