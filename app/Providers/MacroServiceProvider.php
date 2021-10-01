<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Response;

class MacroServiceProvider extends ServiceProvider
{
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
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
      $this->registerResponseMacros();
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
