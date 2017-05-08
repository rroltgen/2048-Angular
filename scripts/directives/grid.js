app.directive("grid", function() {
	return {
		template: "<table><tr ng-repeat=\"row in rows\"><td ng-repeat=\"cell in row track by $index\">{{ cell }}</td></tr></table>"
	};
});