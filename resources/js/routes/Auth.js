import {
  Login,
  Register,
  ForgotPassword,
  ResetPassword
} from '../Pages/Auth'

const AuthRoutes = [
  {
    path: '/auth/login',
    name: 'auth.login',
    component: Login
  },
  {
    path: '/auth/register',
    name: 'auth.register',
    component: Register
  },
  {
    path: '/auth/forgot-password',
    name: 'auth.forgot-password',
    component: ForgotPassword
  },
  {
    path: '/auth/reset-password/:token',
    name: 'auth.reset-password',
    component: ResetPassword
  }
]

export default AuthRoutes