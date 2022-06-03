<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PetController extends Controller
{
    public function index()
    {
        return [
            [
                'nome' => 'lulu',
                'historia' => 'Conteudo da historia'
            ],
            [
                'nome' => 'paçoca',
                'historia' => 'Conteudo da historia'
            ],
            [
                'nome' => 'Princesa',
                'historia' => 'Conteudo da historia'
            ]
        ];
    }
}
