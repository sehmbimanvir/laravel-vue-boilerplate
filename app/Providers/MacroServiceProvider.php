<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Response;
use Illuminate\Database\Eloquent\FactoryBuilder;

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
        $this->registerFactoryMacros();
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

    /**
     * Factory Macros
     * 
     * @return void
     */
    private function registerFactoryMacros()
    {
        FactoryBuilder::macro('noEvents', function () {
            $this->class::flushEventListeners();
            return $this;
        });
    }
}
