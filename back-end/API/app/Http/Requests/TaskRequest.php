<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class TaskRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        /*switch( $this->method() )
        {
            case 'POST':
            {*/
                return [
                    'content'   => 'required|string|min:10',
                    'priority'  => 'required|in:medium,high,low',
                    'location'  => 'string',
                    'time'      => 'date',
                    'completed' => 'boolean'
                ];
            /*}
            case 'PUT':
            {
                return [
                    'completed' => 'required|integer',
                ];
            }
            default: return [];
        }*/
    }
}
