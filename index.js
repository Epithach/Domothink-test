var request = require('request');


var apiPath = 'http://127.0.0.1:4242';
var storePath = 'http://127.0.0.1:8081';
var token = '"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOiIyMDE3LTAxLTIxVDEzOjA3OjMyLjUwOFoiLCJ1c2VybmFtZSI6InRlc3QifQ.fGKcoVsCI5OTtRQszUzNJ43YhoiTE-b6cMtr9hWTBK4';


/**
*
* LOGIN
*
*/

request.post({url: (apiPath + '/login'), headers: {'content-type': 'application/json'}, body: JSON.stringify({ login: 'test', password: 'test'})}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

/**
*
* DEVICES
*
*/

request.post({url: (apiPath + '/devices'), headers: {'content-type': 'application/json', 'login-token': token
							    }, body: JSON.stringify({ name: 'test', description: 'test', protocole: 'test', status: '1' })}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

request.put({url: (apiPath + '/devices'), headers: {'content-type': 'application/json', 'login-token': token },
	     body: JSON.stringify({ idDevice: 35458, name: 'test', description: 'UPDATE', protocol: 'test', status: '1' })}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

request.delete({url: (apiPath + '/devices/35458'), headers: {'content-type': 'application/json', 'login-token': token }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

request.get({ url: (apiPath + '/devices'), headers: {'content-type': 'application/json', 'login-token': token }}, function optionalCallback(err, httpResponse, body) {
    if (err) {
	return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
});

/**
 *
 * DIRECTIVES
 *
 */


request.post({url: (apiPath + '/directives'), headers: {'content-type': 'application/json', 'login-token': token
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

request.put({url: (apiPath + '/directives'), headers: {'content-type': 'application/json', 'login-token': token },
	      body: JSON.stringify({ idDirective: 32, name: 'new' })}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

request.delete({url: (apiPath + '/directives/32'), headers: {'content-type': 'application/json', 'login-token': token }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

request.get({url: (apiPath + '/directives'), headers: {'content-type': 'application/json', 'login-token': token }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

/**
*
* PLUGIN
*
*/


request.post({url: (apiPath + '/plugins/install'), headers: {'content-type': 'application/json', 'login-token': token
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



request.delete({url: (apiPath + '/plugins/uninstall/0'), headers: {'content-type': 'application/json', 'login-token': token }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });


request.get({url: (apiPath + '/plugins'), headers: {'content-type': 'application/json', 'login-token': token }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

/*
 * USER
 *
 */


request.post({url: (apiPath + '/create_account'), headers: {'content-type': 'application/json', 'login-token': token
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

request.post({url: (apiPath + '/change_password'), headers: {'content-type': 'application/json', 'login-token': token
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

request.post({url: (apiPath + '/logout'), headers: {'content-type': 'application/json', 'login-token': token
								   }, body: JSON.stringify({ token: token  })}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

/**
 *
 * STORE 
 *
 */

request.post({url: (storePath + '/store'), headers: {'content-type': 'application/json', 'login-token': token
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

request.delete({url: (storePath + '/store'), headers: {'content-type': 'application/json', 'login-token': token
							  }, body: JSON.stringify({ idPlugin: 14
										    , keyLoginHash: 'ANTOINE'})}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });



request.get({url: (storePath + '/store'), headers: {'content-type': 'application/json' }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

request.get({url: (storePath + '/store/12'), headers: {'content-type': 'application/json' }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

/**
 *
 * StoreComments
 *
 */

request.post({url: (storePath + '/store/12/comments'), headers: {'content-type': 'application/json'
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



request.put({url:(storePath +  '/store/comments'), headers: {'content-type': 'application/json' },
	     body: JSON.stringify({ idComment: 12, keyLoginHash: 'ANTOINE', comment: 'CACA' })}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });


request.delete({url: (storePath + '/store/comments/12'), headers: {'content-type': 'application/json', 'login-token': token }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });

request.get({url: (commentStorePath + '/store/12/comments'), headers: {'content-type': 'application/json' }}
	     , function optionalCallback(err, httpResponse, body) {
		 if (err) {
		     return console.error('upload failed:', err);
		 }
		 console.log('Upload successful!  Server responded with:', body);
	     });
