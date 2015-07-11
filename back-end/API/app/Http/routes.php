<?php

/*
|--------------------------------------------------------------------------
| API routes
|--------------------------------------------------------------------------
|*/
Route::group(['prefix' => 'api'], function()
{
    Route::resource('comments', 'CommentController');
    Route::resource('task', 'TaskController');
});
