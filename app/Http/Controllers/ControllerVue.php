<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ControllerVue extends Controller
{
    public function index(){
        return view('App');
    }
}
