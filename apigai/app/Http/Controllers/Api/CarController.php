<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Nette\Utils\Json;

class CarController extends Controller
{
    public function index(Request $request){
        if(strlen($request['query']) == 8){
            $client = new \GuzzleHttp\Client(['headers' => ['Accept' => 'application/json','X-Api-Key'=> 'a4ac865acdf651589a1fb19439037241']]);
            $gai =  $client->request('GET', 'https://baza-gai.com.ua/nomer/'.$request['query']);
            $RESULT =  $gai->getBody();
            echo $RESULT;
        }
        elseif (strlen($request['query']) == 17){
            $client = new \GuzzleHttp\Client(['headers' => ['Accept' => 'application/json','X-Api-Key'=> 'a4ac865acdf651589a1fb19439037241']]);
            $gai =  $client->request('GET', 'https://baza-gai.com.ua/vin/'.$request['query']);
            $RESULT =  $gai->getBody();
            echo $RESULT;
        }
        return $request;
    }
}
