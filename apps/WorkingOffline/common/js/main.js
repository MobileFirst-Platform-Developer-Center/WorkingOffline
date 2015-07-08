/*
*
    COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
    these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
    application programs conforming to the application programming interface for the operating platform for which the sample code is written.
    Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
    IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.

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
