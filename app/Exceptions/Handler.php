<?php

namespace App\Exceptions;

use Exception;
use Throwable;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
      $this->renderable(function(Exception $e, $request) {
        if ($response = $this->handleException($request, $e)) return $response;

        if ($request->wantsJson()) return response()->send($e->getMessage(), [], 400);
      });
    }

    private function handleException($request, Exception $e)
    {
      if($e instanceof ValidationException) {
        return response()->send('Validation Error', $e->errors(), 422);
      }
    }
}
