<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Exceptions\CustomException;

class UserController extends Controller
{
    public function changePassword(Request $request)
    {
        $request->validate([
            'old_password' => 'required',
            'password' => 'required|string|min:6|confirmed'
        ]);

        throw_if(!$this->validatePassword($request->old_password), new CustomException('Old Password is Invalid'));

        $request->user()->update($request->only('password'));
        return response()->send('Password Successfully Changed', []);
    }

    public function updateProfile(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email'
        ]);
        $request->user()->update($request->only('name'));
        return response()->send('Profile Successfully Updated', $request->user());
    }

    private function validatePassword($password)
    {
        $current_password = request()->user()->password;
        return Hash::check($password, $current_password);
    }
}
