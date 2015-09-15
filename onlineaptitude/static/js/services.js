angular.module('TrackingApp.services',[])
.factory('networkCallService', function($log,$http) {

	// var addNewDevices = function(id,name,type,phoneNo,email) {
	// 	return $http.post("/api/newDevice/add/",{deviceId:id,deviceType:type,email:email,name:name,phoneNo:phoneNo}).then(function(result){
	// 		return result.data;

	// 	});
	// };
	var list = [];
	 var getList = function() {
		// return $http.post("/api/newDevice/add/",{deviceId:id,deviceType:type,email:email,name:name,phoneNo:phoneNo}).then(function(result){
			return list;

		// });
	};

	var setList = function(lists){
		list = lists;
	};


return{
		// addNewDevices : addNewDevices,
		setList : setList,
		getList : getList
	};

});
