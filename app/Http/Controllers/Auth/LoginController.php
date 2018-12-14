<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Exceptions\CustomException;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
     */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function showLoginForm()
    {
        throw new NotFoundHttpException('Page Not Found');
    }

    /**
     * Attempt Login to Database
     * @param Request $request
     * @return boolean
     */
    protected function attemptLogin(Request $request)
    {
        return $this->guard()->attempt($this->credentials($request));
    }

    protected function sendLoginResponse(Request $request)
    {
        $this->clearLoginAttempts($request);

        return $this->authenticated($request, $this->guard()->user());
    }

    /**
     * Check if User Authenticated
     * @param Request $request
     * @param $user Authenticated User Data
     * @return Response JSON
     */
    protected function authenticated(Request $request, $user)
    {
        $user->token = JWTAuth::fromUser($user);
        return response()->send('User Logged In Successfully', $user);
    }

    /**
     * Send Failed Login Response
     * @param Request $request
     */
    protected function sendFailedLoginResponse(Request $request)
    {
        throw new CustomException('Invalid Credentials', 401);
    }

    /**
     * Send Lockout Response
     * @param Request $request
     */
    protected function sendLockoutResponse(Request $request)
    {
        $seconds = $this->limiter()->availableIn(
            $this->throttleKey($request)
        );
        throw new CustomException('Too Many Login Attemps, Try After ' . $seconds . ' Seconds', 429);
    }

    /**
     * Log the user out of the application.
     * (Overwritten to Remove Session Request)
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        $this->guard()->logout();

        return $this->loggedOut($request);
    }

    /**
     * Send Logout Response
     * @param Request $request
     */
    protected function loggedOut(Request $request)
    {
        return response()->send('Logged Out Successfully');
    }
}
