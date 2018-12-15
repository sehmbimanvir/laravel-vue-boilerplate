<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Response;

class MacroServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerResponseMacros();
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Response Macro
     * 
     * @return void
     */
    private function registerResponseMacros()
    {
        Response::macro('send', function ($message = null, $data = [], $status = 200) {
            return response()->json([
                'message' => $message,
                'data' => $data
            ], $status);
        });
    }
}
