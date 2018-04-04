<?php

function sign_request($request, $consumer_secret, $token_secret = null, $http_method = 'GET') {
	$a = explode('?', $request);
	$host_uri = $a[0];
	$params = isset($a[1])?$a[1]:null;
	$params = explode('&', $params);
	if(isset($params['oauth_signature'])) unset($params['oauth_signature']);
	sort($params);
	ksort($params);
	$encoded_parameters = implode('&',$params);

	$base = str_replace('+', ' ', str_replace('%7E', '~', rawurlencode($http_method)));
	$base.= '&';
	$base.= str_replace('+', ' ', str_replace('%7E', '~', rawurlencode($host_uri)));
	$base.= '&';
	$base.= str_replace('+', ' ', str_replace('%7E', '~', rawurlencode($encoded_parameters)));

	$hmac_key = str_replace('+', ' ', str_replace('%7E', '~', rawurlencode($consumer_secret)));
	$hmac_key.= '&';
	$hmac_key.= str_replace('+', ' ', str_replace('%7E', '~', rawurlencode($token_secret)));

	$oauth_signature = base64_encode(hash_hmac('sha1', $base, $hmac_key, true));

	return $request.(strpos($request, '?')?'&':'?').'oauth_signature='.rawurlencode($oauth_signature);
}

$oauth_consumer_key = "33058aab4dd330de38d16de2dcfb7119e030e3a5";
$consumer_secret = "32cf643d2f097bab19f8156280e14c296e166f4c";
$url = "http://api.music-story.com/oauth/request_token.json?oauth_consumer_key=";
$url .= $oauth_consumer_key;
$query = sign_request($url, $consumer_secret);

$signature = explode("&", $query);
$signature = $signature[count($signature) - 1];
$signature = explode("=", $signature);
$signature = $signature[1];

// $response = file_get_contents($query);
var_dump($query);
// $response_JSON = json_decode(file_get_contents($query));
exit;
$oauth_token = $response_JSON->data->token;
$oauth_signature = $response_JSON->data->token_secret;
// var_dump($response_JSON);

$query2 = "http://api.music-story.com/artist/search.json?name=Bob%20Marley&";
$query2 .= "oauth_token=$oauth_token&oauth_signature=$oauth_signature";


// $musique = file_get_contents($query2);
// var_dump($query);
// var_dump($signature);
var_dump($query2);

// var_dump($musique);
