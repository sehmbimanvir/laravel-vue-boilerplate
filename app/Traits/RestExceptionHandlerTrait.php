<?php

namespace App\Traits;

use Exception;
use App\Exceptions\CustomException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Illuminate\Database\QueryException;

trait RestExceptionHandlerTrait
{

    protected function getJsonResponse(Request $request, Exception $e)
    {
        $response = ['message' => $e->getMessage(), 'code' => 400, 'data' => []];
        switch (true) {
            case $this->isValidationException($e):
                $response = [
                    'data' => $e->errors(),
                    'message' => 'Validation Error',
                    'code' => 422
                ];
                break;

            case $this->isAuthenticationException($e):
                $response['code'] = 401;
                break;

            case $this->isNotFoundException($e):
                $response['message'] = 'Route Not Found';
                $response['code'] = 404;
                break;

            case $this->isMethodNotAllowedException($e):
                $response['message'] = 'Method Not Allowed';
                $response['code'] = 405;
                break;

            case $this->isQueryException($e):
                $response['code'] = 403;
                break;

            case $this->isCustomException($e):
                $response['code'] = $e->status;
                break;

            default:
                $response['message'] .= " In {$e->getFile()} On {$e->getLine()}";
        }
        return response()->send($response['message'], $response['data'], $response['code']);
    }

    protected function isCustomException(Exception $e)
    {
        return $e instanceof CustomException;
    }

    protected function isValidationException(Exception $e)
    {
        return $e instanceof ValidationException;
    }

    protected function isAuthenticationException(Exception $e)
    {
        return $e instanceof AuthenticationException;
    }

    protected function isNotFoundException(Exception $e)
    {
        return $e instanceof NotFoundHttpException;
    }

    protected function isMethodNotAllowedException(Exception $e)
    {
        return $e instanceof MethodNotAllowedHttpException;
    }

    protected function isQueryException(Exception $e)
    {
        return $e instanceof QueryException;
    }
}