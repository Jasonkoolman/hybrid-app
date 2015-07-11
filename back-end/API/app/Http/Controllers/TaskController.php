<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Task;
use App\Http\Requests;
use App\Http\Requests\TaskRequest;
use App\Http\Controllers\Controller;

use DateTime;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return response()->json( Task::all() );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param TaskRequest  $request
     * @return Response
     */
    public function store(TaskRequest $request)
    {
        Task::create([
            'content' => $request->input('content'),
            'priority' => $request->input('priority'),
            'location' => $request->input('location'),
            'time' => new DateTime( $request->input('time') )
        ]);

        return response()->json();
    }

    /**
     * Display the specified resource.
     *
     * @param  TaskRequest  $request
     * @return Response
     */
    public function show(TaskRequest $request)
    {
        Task::findOrFail( $request->input('id') );

        return response()->json();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @param  TaskRequest  $request
     * @return Response
     */
    public function update($id, TaskRequest $request)
    {
        $task = Task::findOrFail( $id );

        $task->completed = $request->input('completed');
        $task->content = $request->input('content');
        $task->priority = $request->input('priority');
        $task->location = $request->input('location');
        $task->time = $request->input('time');
        $task->completed = $request->input('completed');

        $task->save();

        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        Task::destroy($id);

        return response()->json();
    }
}
