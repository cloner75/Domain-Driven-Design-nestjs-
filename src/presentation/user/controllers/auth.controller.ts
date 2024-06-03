import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AuthService } from 'src/application/user/services/auth.service';
import { UserService } from 'src/application/user/services/user.service';

@Controller('auth')
export class AuthController {
  private readonly authService: AuthService;
  private readonly userService: UserService;

  @Post('/login')
  login(@Body() body: any): any {
    return {
      token: '',
      refreshToken: '',
      userId: ''
    };
  }

  @Post('/register')
  register(@Body() body: any): any {
    return {
      token: '',
      refreshToken: '',
      userId: ''
    };
  }

  @Post('/logout')
  logout(): any {
    return {
      success: true
    };
  }
}