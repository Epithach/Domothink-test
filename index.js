var request = require('request');

/**
*
* LOGIN
*
*/

/*
request.post({url:'http://127.0.0.1:4242/login', headers: {'content-type': 'application/json'}, body: JSON.stringify({ login: 'test', password: 'test'})}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });
*/

var token = '"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOiIyMDE3LTAxLTIxVDEzOjA3OjMyLjUwOFoiLCJ1c2VybmFtZSI6InRlc3QifQ.fGKcoVsCI5OTtRQszUzNJ43YhoiTE-b6cMtr9hWTBK4';

/**
*
* DEVICES
*
*/

/*
request.post({url:'http://127.0.0.1:4242/devices', headers: {'content-type': 'application/json', 'login-token': token
							    }, body: JSON.stringify({ name: 'test', description: 'test', protocole: 'test', status: '1' })}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });


request.put({url:'http://127.0.0.1:4242/devices', headers: {'content-type': 'application/json', 'login-token': token },
	     body: JSON.stringify({ idDevice: 35458, name: 'test', description: 'UPDATE', protocol: 'test', status: '1' })}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });



request.delete({url:'http://127.0.0.1:4242/devices/35458', headers: {'content-type': 'application/json', 'login-token': token }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

request.get({ url:'http://127.0.0.1:4242/devices', headers: {'content-type': 'application/json', 'login-token': token }}, function optionalCallback(err, httpResponse, body) {
    if (err) {
	return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
});
*/

/**
*
* DIRECTIVES
*
*/

/*
request.post({url:'http://127.0.0.1:4242/directives', headers: {'content-type': 'application/json', 'login-token': token
							       }, body: JSON.stringify({ name: 'test'
											 , creatorId: 1
											 , deviceId: 1
											 , actionId: 1
											 , periodicityType: 1
											 , periodicityData: 'allo'
										       })}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });



request.put({url:'http://127.0.0.1:4242/directives', headers: {'content-type': 'application/json', 'login-token': token },
	      body: JSON.stringify({ idDirective: 32, name: 'new' })}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });


request.delete({url:'http://127.0.0.1:4242/directives/32', headers: {'content-type': 'application/json', 'login-token': token }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

request.get({url:'http://127.0.0.1:4242/directives', headers: {'content-type': 'application/json', 'login-token': token }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });
*/

/**
*
* PLUGIN
*
*/

/*
request.post({url:'http://127.0.0.1:4242/plugins/install', headers: {'content-type': 'application/json', 'login-token': token
							    }, body: JSON.stringify({ name: 'CACA'
										      , status: true
										      , repository: 'https://github.com/epithach/ember-test.git'
										    })}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });



request.delete({url:'http://127.0.0.1:4242/plugins/uninstall/0', headers: {'content-type': 'application/json', 'login-token': token }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });


request.get({url:'http://127.0.0.1:4242/plugins', headers: {'content-type': 'application/json', 'login-token': token }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

*/

/*
 * USER
 *
 */

/*
request.post({url:'http://127.0.0.1:4242/create_account', headers: {'content-type': 'application/json', 'login-token': token
								   }, body: JSON.stringify({ login: 'antoine'
											     , password: 'antoine'
											     , confirmPassword: 'antoine'
											     , boxKey: '' })}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

request.post({url:'http://127.0.0.1:4242/change_password', headers: {'content-type': 'application/json', 'login-token': token
								   }, body: JSON.stringify({ userId: 1
											     , oldpassword: 'antoine'
											     , newPassword: 'antoine'
											     , confirmPassword: 'antoine'  })}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });


request.post({url:'http://127.0.0.1:4242/logout', headers: {'content-type': 'application/json', 'login-token': token
								   }, body: JSON.stringify({ token: token  })}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });
*/


/**
 *
 * STORE 
 *
 */


/*
request.post({url:'http://127.0.0.1:8081/store', headers: {'content-type': 'application/json', 'login-token': token
							  }, body: JSON.stringify({ name: 'ANTOINE'
										    , repository: 'https://github.com/epithach/muzistream'
										    , language: 'ANTOINE'
										    , keyLoginHash: 'ANTOINE'})}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });


request.delete({url:'http://127.0.0.1:8081/store', headers: {'content-type': 'application/json', 'login-token': token
							  }, body: JSON.stringify({ idPlugin: 14
										    , keyLoginHash: 'ANTOINE'})}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });



request.get({url:'http://127.0.0.1:8081/store', headers: {'content-type': 'application/json' }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

request.get({url:'http://127.0.0.1:8081/store/12', headers: {'content-type': 'application/json' }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });
*/


/*
request.post({url:'http://127.0.0.1:8081/store/12/comments', headers: {'content-type': 'application/json'
							    }, body: JSON.stringify({ author: 'ANTOINE'
										      , rate: '5'
										      , comment: 'Comment'
										      , keyLoginHash: 'ANTOINE'})}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });



request.put({url:'http://127.0.0.1:8081/store/comments', headers: {'content-type': 'application/json' },
	     body: JSON.stringify({ idComment: 12, keyLoginHash: 'ANTOINE', comment: 'CACA' })}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });
*/

request.delete({url:'http://127.0.0.1:8081/store/comments/12', headers: {'content-type': 'application/json', 'login-token': token }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

request.get({url:'http://127.0.0.1:8081/store/12/comments', headers: {'content-type': 'application/json' }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });
