angular.module('TrackingApp.controllers',[])
.controller('MasterCtrl', function($log,$scope,networkCallService){
	console.log("MasterCtrl loaded...");


})

.controller('fillQuestionCtrl', function($log,$scope,networkCallService){
	console.log("fillQuestionCtrl loaded...");
	var profilePromis = networkCallService.getList();
				console.log(profilePromis);
				$scope.getListItems = profilePromis;
})

.controller('testCategoriesCtrl', function($log,$scope,networkCallService,$state){
	console.log("testCategoriesCtrl loaded...");

		// $scope.fillQuestionOption = function(){
		// };



		$scope.obj = [{"maincategory": "General Aptitude","subcategory":[{"category":"Arithmetic Aptitude"},
																		{"category":"Data Interpretation"},
																		{"category":"Online Aptitude Test"},
																		{"category":"Data Interpretation Test"}]},

					    {"maincategory": "Online Tests","subcategory":[{"category":"Aptitude Test"},
																		{"category":"Verbal Ability Test"},
																		{"category":"Logical Reasoning Test"},
																		{"category":"C Programming Test"},
																		{"category":"Java Programming Test"},
																		{"category":"Read more..."}]},

						{"maincategory": "Programming","subcategory":[{"category":"C Programming"},
																		{"category":"C++ Programming"},
																		{"category":"C# Programmingt"},
																		{"category":"Java Programming"}]},

						{"maincategory": "Puzzles","subcategory":[{"category":"Sudoku"},
																		{"category":"Number puzzles"},
																		{"category":"Missing letters puzzles"},
																		{"category":"Logical puzzles"},
																		{"category":"Clock puzzles"}]},

						{"maincategory": "Technical Interview - Short Answers","subcategory":[{"category":"Software Testing"},
																		{"category":"Data Structures"},
																		{"category":"The C Language Basics"},
																		{"category":"SQL Server"},
																		{"category":"Networking"},
																		{"category":"Core Java"},
																		{"category":"Read more..."}]},

						{"maincategory": "Medical / Science","subcategory":[{"category":"Microbiology"},
																		{"category":"Biochemistry"},
																		{"category":"Biotechnology"},
																		{"category":"Biochemical Engineering"}]},

						{"maincategory": "Verbal and Reasoning","subcategory":[{"category":"Verbal Ability"},
																		{"category":"Logical Reasoning"},
																		{"category":"Verbal Reasoning"},
																		{"category":"Non Verbal Reasoning"}]},

						{"maincategory": "Interview","subcategory":[{"category":"Placement Papers"},
																		{"category":"Group Discussion"},
																		{"category":"HR Interview"},
																		{"category":"Technical Interview"},
																		{"category":"Body Language"},
																		{"category":"Read more..."}]},

						{"maincategory": "General Knowledge","subcategory":[{"category":"Basic General Knowledge"},
																		{"category":"General Science"},
																		{"category":"Inventions"},
																		{"category":"World Geography"},
																		{"category":"Read more..."}]},

						{"maincategory": "Engineering","subcategory":[{"category":"Networking Questions"},
																		{"category":"Database Questions"},
																		{"category":"Basic Electronics"},
																		{"category":"Digital Electronics"},
																		{"category":"Electrical Engineering"},
																		{"category":"Read more..."}]},

						{"maincategory": "New Sections","subcategory":[{"category":"ECE Questions and Answers"},
																		{"category":"Civil Engineering"},
																		{"category":"Mechanical Engineering"},
																		{"category":"Data Structures, Marketing etc."}]
																	}];
	// obj1 = JSON.parse(text);
	// 		console.log(obj1);
	// obj = JSON.parse(object);
			// console.log($scope.obj[0].maincategory);
			// console.log($scope.obj[0].subcategory);

		$scope.selectedOptionlist = [];
		$scope.selectedOption = function(option,value){
			var selectoption = option;
			var val = value;
			if(val == false){
				var index = $scope.selectedOptionlist.indexOf(option);
				if (index > -1) {
    				$scope.selectedOptionlist.splice(index, 1);
				}
				console.log($scope.selectedOptionlist);
			}else{
				$scope.selectedOptionlist.push(selectoption);
				console.log($scope.selectedOptionlist);
			}

		};

		$scope.sendList = function(){
			if($scope.selectedOptionlist != ""){
				var profilePromis = networkCallService.setList($scope.selectedOptionlist);
				$state.go('fillQuestions');
			}else{
				alert("you must select a category");
			}
		};

});
