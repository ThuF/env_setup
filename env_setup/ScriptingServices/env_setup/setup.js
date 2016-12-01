/* globals $ */
/* eslint-env node, dirigible */

var response = require('net/http/response');
var env = require('core/env');

var IP = 'http://192.168.99.100';
var HOST = 'https://192.168.99.100:8443';

var TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJrdWJlcm5ldG'
	+ 'VzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9u'
	+ 'YW1lc3BhY2UiOiJkZXYtYWNjb3VudCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY29'
	+ '1bnQvc2VjcmV0Lm5hbWUiOiJkZWZhdWx0LXRva2VuLTNzaWtnIiwia3ViZXJuZXRlcy'
	+ '5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImRlZmF1bHQiLC'
	+ 'JrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiI'
	+ 'xNDE0ODE0NC1iNjIzLTExZTYtOGNjOS1iYTRhYTZjNDJlNWIiLCJzdWIiOiJzeXN0ZW06'
	+ 'c2VydmljZWFjY291bnQ6ZGV2LWFjY291bnQ6ZGVmYXVsdCJ9.hWF_Lb7JXcNh_xtS_UOio'
	+ 'J0h_5QOSLglOm6aDHIrijJcrfvF9ABdBF99J84KGWcHJlaXLGorV_v6ooQ2jdE8E3xwLk1F0'
	+ 'wGqmlETRYf9ylp4Twg905j6FkUvKIGIXY-_LyT-XEF4RasQyYJYuXAQjWQ1ysrAJdE6hUWLk'
	+ 'UceZ0EZX8ImpE4e_-fBaYqoTGAlQsEp8skixJQp_o0XQRD6BB9dHJ9-drchEOs1sfntXga9Pl'
	+ 'tK0SNwdRStr9xfk3ZhJgByaf34KrFwCQr2UvIVHhHmAVtVJmo-25hZq0i9Xs-fynCEhOAf4h2'
	+ 'Gux-qeKaBzuD8u-iZuy8YZASBBEjl8g';

env.set('zeus.landscapes.ip', IP);
env.set('zeus.landscapes.host', HOST);
env.set('zeus.landscapes.token', TOKEN);

response.println('zeus.landscapes.ip = ' + env.get('zeus.landscapes.ip'));
response.println('zeus.landscapes.host = ' + env.get('zeus.landscapes.host'));
response.println('zeus.landscapes.token = ' + env.get('zeus.landscapes.token'));
response.flush();
response.close();
