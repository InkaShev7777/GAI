<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Nette\Utils\Json;

class CarController extends Controller
{
    public function index(Request $request){
        if(strlen($request['query']) == 8){
            $client = new \GuzzleHttp\Client(['headers' => ['Accept' => 'application/json','X-Api-Key'=> '91c95e92e39fe354d161f556ba2b9e39','Access-Control-Allow-Origin' => '*']]);
            $gai =  $client->request('GET', 'https://baza-gai.com.ua/nomer/'.$request['query']);
            $RESULT =  $gai->getBody();
            return $RESULT;
        }
        elseif (strlen($request['query']) == 17){
            $client = new \GuzzleHttp\Client(['headers' => ['Accept' => 'application/json','X-Api-Key'=> '91c95e92e39fe354d161f556ba2b9e39','Access-Control-Allow-Origin' => '*']]);
            $gai =  $client->request('GET', 'https://baza-gai.com.ua/vin/'.$request['query']);
            $RESULT =  $gai->getBody();
            return $RESULT;
        }
        return $request;
    }
    public  function getModel(Request $request){
        $client = new \GuzzleHttp\Client(['headers' => ['Accept' => 'application/json','X-Api-Key'=> '91c95e92e39fe354d161f556ba2b9e39','Access-Control-Allow-Origin' => '*']]);
        $gai =  $client->request('GET', 'https://baza-gai.com.ua/make/'.$request['slug']);
        $RESULT =  $gai->getBody();
        echo  $RESULT;
    }
    public function getCar(Request $request){
        $client = new \GuzzleHttp\Client(['headers' => ['Accept' => 'application/json','X-Api-Key'=> '91c95e92e39fe354d161f556ba2b9e39','Access-Control-Allow-Origin' => '*']]);
        $gai =  $client->request('GET', 'https://baza-gai.com.ua/catalog/bmw/3er/plates?order=registered_at&order_type=desc&page=1');
        $RESULT =  $gai->getBody();
        echo  $RESULT;
        return $request;
    }
}
