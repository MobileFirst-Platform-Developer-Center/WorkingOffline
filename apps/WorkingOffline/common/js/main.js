/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

function wlCommonInit(){	
	document.addEventListener(WL.Events.WORKLIGHT_IS_CONNECTED, connectDetected, false); 
	document.addEventListener(WL.Events.WORKLIGHT_IS_DISCONNECTED, disconnectDetected , false);
}

function connectionFailure(){
	alert("Could not connect to the MobileFirst Server.");
	var output = new Date() + "<hr />Working offline";
	$('#info').html(output);
}

function disconnectDetected(){
	var output = new Date() + "<hr />disconnectDetected";
	$('#info').html(output);
}

function connectDetected(){
	var output = new Date() + "<hr />connectDetected";
	$('#info').html(output);
}

function setHeartBeatInterval(interval){
	var output = new Date() + "<hr />heartbeat interval is set to: " + interval;
	$('#info').html(output);
	WL.Client.setHeartBeatInterval(interval);
}
