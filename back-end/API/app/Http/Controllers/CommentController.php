<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

use App\Comment;

use App\Http\Requests;
use App\Http\Requests\CommentRequest;
use App\Http\Controllers\Controller;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return response()->json( Comment::all() );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CommentRequest  $request
     * @return Response
     */
    public function store(CommentRequest $request)
    {
        Comment::create([
            'content' => $request->input('content'),
            'author' => $request->input('author')
        ]);

        return response()->json(['success' => true]);
    }

    /**
     * Display the specified resource.
     *
     * @param CommentRequest  $request
     * @return Response
     */
    public function show(CommentRequest $request)
    {
        Comment::findOrNew( $request->input('id') );

        return response()->json(['success' => true]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        Comment::destroy($id);

        return Response::json(['success' => true]);
    }
}
