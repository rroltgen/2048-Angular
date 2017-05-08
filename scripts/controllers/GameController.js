app.controller('GameController', ['$scope', function($scope) {
	$scope.game = {
		currentScore: 0,
		gameOver: 0,
		goalMet: 0
	};
	$scope.upFunc = function() {
		var n = 0;
		var one = false;
		var two = false;
		var three = false;
		var four = false;
		var movement = false;
		for(n; n < 4; n++)
		{
			if($scope.rows[3][n] != ' ')
			{
				four = true;
			}
			if($scope.rows[2][n] != ' ')
			{
				three = true;
			}
			if($scope.rows[1][n] != ' ')
			{
				two = true;
			}
			if($scope.rows[0][n] != ' ')
			{
				one = true;
			}
			if(one == true && two == true && three == true && four == true)
			{
				if($scope.rows[1][n] == $scope.rows[0][n])
				{
					$scope.rows[0][n] = $scope.rows[1][n] + $scope.rows[0][n];
					$scope.game.currentScore += parseInt($scope.rows[0][n]);
					$scope.rows[1][n] = $scope.rows[2][n];
					$scope.rows[2][n] = $scope.rows[3][n];
					$scope.rows[3][n] = ' ';
					movement = true;
				}
				if($scope.rows[1][n] == $scope.rows[2][n])
				{
					$scope.rows[1][n] = $scope.rows[1][n] + $scope.rows[2][n];
					$scope.game.currentScore += parseInt($scope.rows[1][n]);
					$scope.rows[2][n] = $scope.rows[3][n];
					$scope.rows[3][n] = ' ';
					movement = true;
				}
				if($scope.rows[2][n] == $scope.rows[3][n] && ($scope.rows[2][n] != ' ' || $scope.rows[3][n] != ' '))
				{
					$scope.rows[2][n] = $scope.rows[2][n] + $scope.rows[3][n];
					$scope.game.currentScore += parseInt($scope.rows[2][n]);
					$scope.rows[3][n] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == true && three == true && four == false)
			{
				if($scope.rows[1][n] == $scope.rows[0][n])
				{
					$scope.rows[0][n] = $scope.rows[1][n] + $scope.rows[0][n];
					$scope.game.currentScore += parseInt($scope.rows[0][n]);
					$scope.rows[1][n] = $scope.rows[2][n];
					$scope.rows[2][n] = ' ';
					movement = true;
				}
				if($scope.rows[2][n] == $scope.rows[1][n])
				{
					$scope.rows[1][n] = $scope.rows[1][n] + $scope.rows[2][n];
					$scope.game.currentScore += parseInt($scope.rows[1][n]);
					$scope.rows[2][n] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == true && three == true && four == true)
			{
				if($scope.rows[1][n] == $scope.rows[2][n])
				{
					$scope.rows[0][n] = $scope.rows[1][n] + $scope.rows[2][n];
					$scope.rows[1][n] = $scope.rows[3][n];
					$scope.game.currentScore += parseInt($scope.rows[0][n]);
					$scope.rows[3][n] = ' ';
					$scope.rows[2][n] = ' ';
					movement = true;
				}
				else if($scope.rows[2][n] == $scope.rows[3][n])
				{
					$scope.rows[0][n] = $scope.rows[0][n];
					$scope.rows[1][n] = $scope.rows[2][n] + $scope.rows[3][n];
					$scope.game.currentScore += parseInt($scope.rows[1][n]);
					$scope.rows[2][n] = ' ';
					$scope.rows[3][n] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[0][n] = $scope.rows[1][n];
					$scope.rows[1][n] = $scope.rows[2][n];
					$scope.rows[2][n] = $scope.rows[3][n];
					$scope.rows[3][n] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == true && three == false && four == true)
			{
				if($scope.rows[0][n] == $scope.rows[1][n])
				{
					$scope.rows[0][n] = $scope.rows[1][n] + $scope.rows[0][n];
					$scope.game.currentScore += parseInt($scope.rows[0][n]);
					$scope.rows[1][n] = $scope.rows[3][n];
					$scope.rows[3][n] = ' ';
					movement = true;
				}
				else if($scope.rows[1][n] == $scope.rows[3][n])
				{
					$scope.rows[1][n] = $scope.rows[3][n] + $scope.rows[1][n];
					$scope.game.currentScore += parseInt($scope.rows[1][n]);
					$scope.rows[3][n] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[2][n] = $scope.rows[3][n];
					$scope.rows[3][n] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == false && three == true && four == true)
			{
				if($scope.rows[0][n] == $scope.rows[2][n])
				{
					$scope.rows[0][n] = $scope.rows[0][n] + $scope.rows[2][n];
					$scope.game.currentScore += parseInt($scope.rows[0][n]);
					$scope.rows[1][n] = $scope.rows[3][n];
					$scope.rows[3][n] = ' ';
					$scope.rows[2][n] = ' ';
					movement = true;
				}
				else if($scope.rows[2][n] == $scope.rows[3][n])
				{
					$scope.rows[1][n] = $scope.rows[3][n] + $scope.rows[2][n];
					$scope.game.currentScore += parseInt($scope.rows[1][n]);
					$scope.rows[3][n] = ' ';
					$scope.rows[2][n] = ' ';
					movement = true;
				}
				else 
				{
					$scope.rows[1][n] = $scope.rows[2][n];
					$scope.rows[2][n] = $scope.rows[3][n];
					$scope.rows[3][n] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == true && three == false && four == false)
			{
				if($scope.rows[0][n] == $scope.rows[1][n])
				{
					$scope.rows[0][n] = $scope.rows[1][n] + $scope.rows[0][n];
					$scope.game.currentScore += parseInt($scope.rows[0][n]);
					$scope.rows[1][n] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == true && three == true && four == false)
			{
				if($scope.rows[2][n] == $scope.rows[1][n])
				{
					$scope.rows[0][n] = $scope.rows[1][n] + $scope.rows[2][n];
					$scope.game.currentScore += parseInt($scope.rows[0][n]);
					$scope.rows[1][n] = ' ';
					$scope.rows[2][n] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[0][n] = $scope.rows[1][n];
					$scope.rows[1][n] = $scope.rows[2][n];
					$scope.rows[2][n] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == false && three == true && four == true)
			{
				if($scope.rows[3][n] == $scope.rows[2][n])
				{
					$scope.rows[0][n] = $scope.rows[3][n] + $scope.rows[2][n];
					$scope.game.currentScore += parseInt($scope.rows[0][n]);
					$scope.rows[3][n] = ' ';
					$scope.rows[2][n] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[0][n] = $scope.rows[2][n];
					$scope.rows[1][n] = $scope.rows[3][n];
					$scope.rows[3][n] = ' ';
					$scope.rows[2][n] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == false && three == false && four == true)
			{
				if($scope.rows[0][n] == $scope.rows[3][n])
				{
					$scope.rows[0][n] = $scope.rows[0][n] + $scope.rows[3][n];
					$scope.game.currentScore += parseInt($scope.rows[0][n]);
					$scope.rows[3][n] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[1][n] = $scope.rows[3][n];
					$scope.rows[3][n] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == false && three == true && four == false)
			{
				if($scope.rows[0][n] == $scope.rows[2][n])
				{
					$scope.rows[0][n] = $scope.rows[0][n] + $scope.rows[2][n];
					$scope.game.currentScore += parseInt($scope.rows[0][n]);
					$scope.rows[2][n] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[1][n] = $scope.rows[2][n];
					$scope.rows[2][n] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == true && three == false && four == true)
			{
				if($scope.rows[1][n] == $scope.rows[3][n])
				{
					$scope.rows[0][n] = $scope.rows[1][n] + $scope.rows[3][n];
					$scope.game.currentScore += parseInt($scope.rows[0][n]);
					$scope.rows[1][n] = ' ';
					$scope.rows[3][n] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[0][n] = $scope.rows[1][n];
					$scope.rows[1][n] = $scope.rows[3][n];
					$scope.rows[3][n] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == true && three == false && four == false)
			{
				$scope.rows[0][n] = $scope.rows[1][n];
				$scope.rows[1][n] = ' ';
				movement = true;
			}
			else if(one == false && two == false && three == true && four == false)
			{
				$scope.rows[0][n] = $scope.rows[2][n];
				$scope.rows[2][n] = ' ';
				movement = true;
			}
			else if(one == false && two == false && three == false && four == true)
			{
				$scope.rows[0][n] = $scope.rows[3][n];
				$scope.rows[3][n] = ' ';
				movement = true;
			}
			one = false;
			two = false;
			three = false;
			four = false;
		}
		$scope.checkgoal();
		$scope.checkgameover();
		if(movement) {
			$scope.addRandom();
		}
    };
    $scope.downFunc = function() {
        var n = 0;
		var one = false;
		var two = false;
		var three = false;
		var four = false;
		var movement = false;
		for(n; n < 4; n++)
		{
			if($scope.rows[3][n] != ' ')
			{
				four = true;
			}
			if($scope.rows[2][n] != ' ')
			{
				three = true;
			}
			if($scope.rows[1][n] != ' ')
			{
				two = true;
			}
			if($scope.rows[0][n] != ' ')
			{
				one = true;
			}
			if(one == true && two == true && three == true && four == true)
			{
				if($scope.rows[3][n] == $scope.rows[2][n])
				{
					$scope.rows[3][n] = $scope.rows[3][n] + $scope.rows[2][n];
					$scope.game.currentScore += parseInt($scope.rows[3][n]);
					$scope.rows[2][n] = $scope.rows[1][n];
					$scope.rows[1][n] = $scope.rows[0][n];
					$scope.rows[0][n] = ' ';
					movement = true;
				}
				if($scope.rows[2][n] == $scope.rows[1][n])
				{
					$scope.rows[2][n] = $scope.rows[1][n] + $scope.rows[2][n];
					$scope.game.currentScore += parseInt($scope.rows[2][n]);
					$scope.rows[1][n] = $scope.rows[0][n];
					$scope.rows[0][n] = ' ';
					movement = true;
				}
				if($scope.rows[1][n] == $scope.rows[0][n] && ($scope.rows[1][n] != ' ' || $scope.rows[0][n] != ' '))
				{
					$scope.rows[1][n] = $scope.rows[1][n] + $scope.rows[0][n];
					$scope.game.currentScore += parseInt($scope.rows[1][n]);
					$scope.rows[0][n] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == true && three == true && four == false)
			{
				if($scope.rows[2][n] == $scope.rows[1][n])
				{
					$scope.rows[3][n] = $scope.rows[2][n] + $scope.rows[1][n];
					$scope.game.currentScore += parseInt($scope.rows[3][n]);
					$scope.rows[2][n] = $scope.rows[0][n];
					$scope.rows[1][n] = ' ';
					$scope.rows[0][n] = ' ';
					movement = true;
				}
				else if($scope.rows[1][n] == $scope.rows[0][n])
				{
					$scope.rows[3][n] = $scope.rows[2][n];
					$scope.rows[2][n] = $scope.rows[1][n] + $scope.rows[0][n];
					$scope.game.currentScore += parseInt($scope.rows[2][n]);
					$scope.rows[1][n] = ' ';
					$scope.rows[0][n] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[3][n] = $scope.rows[2][n];
					$scope.rows[2][n] = $scope.rows[1][n];
					$scope.rows[1][n] = $scope.rows[0][n];
					$scope.rows[0][n] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == true && three == true && four == true)
			{
				if($scope.rows[3][n] == $scope.rows[2][n])
				{
					$scope.rows[3][n] = $scope.rows[3][n] + $scope.rows[2][n];
					$scope.rows[2][n] = $scope.rows[1][n];
					$scope.game.currentScore += parseInt($scope.rows[3][n]);
					$scope.rows[1][n] = ' ';
					movement = true;
				}
				else if($scope.rows[2][n] == $scope.rows[1][n])
				{
					$scope.rows[2][n] = $scope.rows[2][n] + $scope.rows[1][n];
					$scope.game.currentScore += parseInt($scope.rows[2][n]);
					$scope.rows[1][n] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == true && three == false && four == true)
			{
				if($scope.rows[3][n] == $scope.rows[1][n])
				{
					$scope.rows[3][n] = $scope.rows[1][n] + $scope.rows[3][n];
					$scope.game.currentScore += parseInt($scope.rows[3][n]);
					$scope.rows[2][n] = $scope.rows[0][n];
					$scope.rows[1][n] = ' ';
					$scope.rows[0][n] = ' ';
					movement = true;
				}
				else if($scope.rows[1][n] == $scope.rows[0][n])
				{
					$scope.rows[2][n] = $scope.rows[0][n] + $scope.rows[1][n];
					$scope.game.currentScore += parseInt($scope.rows[2][n]);
					$scope.rows[1][n] = ' ';
					$scope.rows[0][n] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[2][n] = $scope.rows[1][n];
					$scope.rows[1][n] = $scope.rows[0][n];
					$scope.rows[0][n] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == false && three == true && four == true)
			{
				if($scope.rows[3][n] == $scope.rows[2][n])
				{
					$scope.rows[3][n] = $scope.rows[3][n] + $scope.rows[2][n];
					$scope.game.currentScore += parseInt($scope.rows[3][n]);
					$scope.rows[2][n] = $scope.rows[0][n];
					$scope.rows[0][n] = ' ';
					movement = true;
				}
				else if($scope.rows[2][n] == $scope.rows[0][n])
				{
					$scope.rows[2][n] = $scope.rows[0][n] + $scope.rows[2][n];
					$scope.game.currentScore += parseInt($scope.rows[2][n]);
					$scope.rows[0][n] = ' ';
					movement = true;
				}
				else 
				{
					$scope.rows[1][n] = $scope.rows[0][n];
					$scope.rows[0][n] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == true && three == false && four == false)
			{
				if($scope.rows[0][n] == $scope.rows[1][n])
				{
					$scope.rows[3][n] = $scope.rows[1][n] + $scope.rows[0][n];
					$scope.game.currentScore += parseInt($scope.rows[3][n]);
					$scope.rows[1][n] = ' ';
					$scope.rows[0][n] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[3][n] = $scope.rows[1][n];
					$scope.rows[2][n] = $scope.rows[0][n];
					$scope.rows[1][n] = ' ';
					$scope.rows[0][n] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == true && three == true && four == false)
			{
				if($scope.rows[2][n] == $scope.rows[1][n])
				{
					$scope.rows[3][n] = $scope.rows[1][n] + $scope.rows[2][n];
					$scope.game.currentScore += parseInt($scope.rows[3][n]);
					$scope.rows[1][n] = ' ';
					$scope.rows[2][n] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[3][n] = $scope.rows[2][n];
					$scope.rows[2][n] = $scope.rows[1][n];
					$scope.rows[1][n] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == false && three == true && four == true)
			{
				if($scope.rows[3][n] == $scope.rows[2][n])
				{
					$scope.rows[3][n] = $scope.rows[3][n] + $scope.rows[2][n];
					$scope.game.currentScore += parseInt($scope.rows[3][n]);
					$scope.rows[2][n] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == false && three == false && four == true)
			{
				if($scope.rows[0][n] == $scope.rows[3][n])
				{
					$scope.rows[3][n] = $scope.rows[0][n] + $scope.rows[3][n];
					$scope.game.currentScore += parseInt($scope.rows[3][n]);
					$scope.rows[0][n] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[2][n] = $scope.rows[0][n];
					$scope.rows[0][n] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == false && three == true && four == false)
			{
				if($scope.rows[0][n] == $scope.rows[2][n])
				{
					$scope.rows[3][n] = $scope.rows[0][n] + $scope.rows[2][n];
					$scope.game.currentScore += parseInt($scope.rows[3][n]);
					$scope.rows[2][n] = ' ';
					$scope.rows[0][n] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[3][n] = $scope.rows[2][n];
					$scope.rows[2][n] = $scope.rows[0][n];
					$scope.rows[0][n] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == true && three == false && four == true)
			{
				if($scope.rows[1][n] == $scope.rows[3][n])
				{
					$scope.rows[3][n] = $scope.rows[1][n] + $scope.rows[3][n];
					$scope.game.currentScore += parseInt($scope.rows[3][n]);
					$scope.rows[1][n] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[2][n] = $scope.rows[1][n];
					$scope.rows[1][n] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == false && three == false && four == false)
			{
				$scope.rows[3][n] = $scope.rows[0][n];
				$scope.rows[0][n] = ' ';
				movement = true;
			}
			else if(one == false && two == true && three == false && four == false)
			{
				$scope.rows[3][n] = $scope.rows[1][n];
				$scope.rows[1][n] = ' ';
				movement = true;
			}
			else if(one == false && two == false && three == true && four == false)
			{
				$scope.rows[3][n] = $scope.rows[2][n];
				$scope.rows[2][n] = ' ';
				movement = true;
			}
			
			one = false;
			two = false;
			three = false;
			four = false;
		}
		$scope.checkgoal();
		$scope.checkgameover();
		if(movement) {
			$scope.addRandom();
		}
    };
    $scope.leftFunc = function() {
        var n = 0;
		var one = false;
		var two = false;
		var three = false;
		var four = false;
		var movement = false;
		for(n; n < 4; n++)
		{
			if($scope.rows[n][3] != ' ')
			{
				four = true;
			}
			if($scope.rows[n][2] != ' ')
			{
				three = true;
			}
			if($scope.rows[n][1] != ' ')
			{
				two = true;
			}
			if($scope.rows[n][0] != ' ')
			{
				one = true;
			}
			if(one == true && two == true && three == true && four == true)
			{
				if($scope.rows[n][1] == $scope.rows[n][0])
				{
					$scope.rows[n][0] = $scope.rows[n][1] + $scope.rows[n][0];
					$scope.game.currentScore += parseInt($scope.rows[n][0]);
					$scope.rows[n][1] = $scope.rows[n][2];
					$scope.rows[n][2] = $scope.rows[n][3];
					$scope.rows[n][3] = ' ';
					movement = true;
				}
				if($scope.rows[n][1] == $scope.rows[n][2])
				{
					$scope.rows[n][1] = $scope.rows[n][1] + $scope.rows[n][2];
					$scope.game.currentScore += parseInt($scope.rows[n][1]);
					$scope.rows[n][2] = $scope.rows[n][3];
					$scope.rows[n][3] = ' ';
					movement = true;
				}
				if($scope.rows[n][2] == $scope.rows[n][3] && ($scope.rows[n][2] != ' ' || $scope.rows[n][3] != ' '))
				{
					$scope.rows[n][2] = $scope.rows[n][2] + $scope.rows[n][3];
					$scope.game.currentScore += parseInt($scope.rows[n][2]);
					$scope.rows[n][3] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == true && three == true && four == false)
			{
				if($scope.rows[n][1] == $scope.rows[n][0])
				{
					$scope.rows[n][0] = $scope.rows[n][1] + $scope.rows[n][0];
					$scope.game.currentScore += parseInt($scope.rows[n][0]);
					$scope.rows[n][1] = $scope.rows[n][2];
					$scope.rows[n][2] = ' ';
					movement = true;
				}
				if($scope.rows[n][2] == $scope.rows[n][1])
				{
					$scope.rows[n][1] = $scope.rows[n][1] + $scope.rows[n][2];
					$scope.game.currentScore += parseInt($scope.rows[n][1]);
					$scope.rows[n][2] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == true && three == true && four == true)
			{
				if($scope.rows[n][1] == $scope.rows[n][2])
				{
					$scope.rows[n][0] = $scope.rows[n][1] + $scope.rows[n][2];
					$scope.rows[n][1] = $scope.rows[n][3];
					$scope.game.currentScore += parseInt($scope.rows[n][0]);
					$scope.rows[n][3] = ' ';
					$scope.rows[n][2] = ' ';
					movement = true;
				}
				else if($scope.rows[n][2] == $scope.rows[n][3])
				{
					$scope.rows[n][0] = $scope.rows[n][0];
					$scope.rows[n][1] = $scope.rows[n][2] + $scope.rows[n][3];
					$scope.game.currentScore += parseInt($scope.rows[n][1]);
					$scope.rows[n][2] = ' ';
					$scope.rows[n][3] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[n][0] = $scope.rows[n][1];
					$scope.rows[n][1] = $scope.rows[n][2];
					$scope.rows[n][2] = $scope.rows[n][3];
					$scope.rows[n][3] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == true && three == false && four == true)
			{
				if($scope.rows[n][0] == $scope.rows[n][1])
				{
					$scope.rows[n][0] = $scope.rows[n][1] + $scope.rows[n][0];
					$scope.game.currentScore += parseInt($scope.rows[n][0]);
					$scope.rows[n][1] = $scope.rows[n][3];
					$scope.rows[n][3] = ' ';
					movement = true;
				}
				else if($scope.rows[n][1] == $scope.rows[n][3])
				{
					$scope.rows[n][1] = $scope.rows[n][3] + $scope.rows[n][1];
					$scope.game.currentScore += parseInt($scope.rows[n][1]);
					$scope.rows[n][3] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[n][2] = $scope.rows[n][3];
					$scope.rows[n][3] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == false && three == true && four == true)
			{
				if($scope.rows[n][0] == $scope.rows[n][2])
				{
					$scope.rows[n][0] = $scope.rows[n][0] + $scope.rows[n][2];
					$scope.game.currentScore += parseInt($scope.rows[n][0]);
					$scope.rows[n][1] = $scope.rows[n][3];
					$scope.rows[n][3] = ' ';
					$scope.rows[n][2] = ' ';
					movement = true;
				}
				else if($scope.rows[n][2] == $scope.rows[n][3])
				{
					$scope.rows[n][1] = $scope.rows[n][3] + $scope.rows[n][2];
					$scope.game.currentScore += parseInt($scope.rows[n][1]);
					$scope.rows[n][3] = ' ';
					$scope.rows[n][2] = ' ';
					movement = true;
				}
				else 
				{
					$scope.rows[n][1] = $scope.rows[n][2];
					$scope.rows[n][2] = $scope.rows[n][3];
					$scope.rows[n][3] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == true && three == false && four == false)
			{
				if($scope.rows[n][0] == $scope.rows[n][1])
				{
					$scope.rows[n][0] = $scope.rows[n][1] + $scope.rows[n][0];
					$scope.game.currentScore += parseInt($scope.rows[n][0]);
					$scope.rows[n][1] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == true && three == true && four == false)
			{
				if($scope.rows[n][2] == $scope.rows[n][1])
				{
					$scope.rows[n][0] = $scope.rows[n][1] + $scope.rows[n][2];
					$scope.game.currentScore += parseInt($scope.rows[n][0]);
					$scope.rows[n][1] = ' ';
					$scope.rows[n][2] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[n][0] = $scope.rows[n][1];
					$scope.rows[n][1] = $scope.rows[n][2];
					$scope.rows[n][2] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == false && three == true && four == true)
			{
				if($scope.rows[n][3] == $scope.rows[n][2])
				{
					$scope.rows[n][0] = $scope.rows[n][3] + $scope.rows[n][2];
					$scope.game.currentScore += parseInt($scope.rows[n][0]);
					$scope.rows[n][3] = ' ';
					$scope.rows[n][2] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[n][0] = $scope.rows[n][2];
					$scope.rows[n][1] = $scope.rows[n][3];
					$scope.rows[n][3] = ' ';
					$scope.rows[n][2] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == false && three == false && four == true)
			{
				if($scope.rows[n][0] == $scope.rows[n][3])
				{
					$scope.rows[n][0] = $scope.rows[n][0] + $scope.rows[n][3];
					$scope.game.currentScore += parseInt($scope.rows[n][0]);
					$scope.rows[n][3] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[n][1] = $scope.rows[n][3];
					$scope.rows[n][3] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == false && three == true && four == false)
			{
				if($scope.rows[n][0] == $scope.rows[n][2])
				{
					$scope.rows[n][0] = $scope.rows[n][0] + $scope.rows[n][2];
					$scope.game.currentScore += parseInt($scope.rows[n][0]);
					$scope.rows[n][2] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[n][1] = $scope.rows[n][2];
					$scope.rows[n][2] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == true && three == false && four == true)
			{
				if($scope.rows[n][1] == $scope.rows[n][3])
				{
					$scope.rows[n][0] = $scope.rows[n][1] + $scope.rows[n][3];
					$scope.game.currentScore += parseInt($scope.rows[n][0]);
					$scope.rows[n][1] = ' ';
					$scope.rows[n][3] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[n][0] = $scope.rows[n][1];
					$scope.rows[n][1] = $scope.rows[n][3];
					$scope.rows[n][3] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == true && three == false && four == false)
			{
				$scope.rows[n][0] = $scope.rows[n][1];
				$scope.rows[n][1] = ' ';
				movement = true;
			}
			else if(one == false && two == false && three == true && four == false)
			{
				$scope.rows[n][0] = $scope.rows[n][2];
				$scope.rows[n][2] = ' ';
				movement = true;
			}
			else if(one == false && two == false && three == false && four == true)
			{
				$scope.rows[n][0] = $scope.rows[n][3];
				$scope.rows[n][3] = ' ';
				movement = true;
			}
			one = false;
			two = false;
			three = false;
			four = false;
		}
		$scope.checkgoal();
		$scope.checkgameover();
		if(movement) {
			$scope.addRandom();
		}
    };
    $scope.rightFunc = function() {
        var n = 0;
		var one = false;
		var two = false;
		var three = false;
		var four = false;
		var movement = false;
		for(n; n < 4; n++)
		{
			if($scope.rows[n][3] != ' ')
			{
				four = true;
			}
			if($scope.rows[n][2] != ' ')
			{
				three = true;
			}
			if($scope.rows[n][1] != ' ')
			{
				two = true;
			}
			if($scope.rows[n][0] != ' ')
			{
				one = true;
			}
			if(one == true && two == true && three == true && four == true)
			{
				if($scope.rows[n][3] == $scope.rows[n][2])
				{
					$scope.rows[n][3] = $scope.rows[n][3] + $scope.rows[n][2];
					$scope.game.currentScore += parseInt($scope.rows[n][3]);
					$scope.rows[n][2] = $scope.rows[n][1];
					$scope.rows[n][1] = $scope.rows[n][0];
					$scope.rows[n][0] = ' ';
					movement = true;
				}
				if($scope.rows[n][2] == $scope.rows[n][1])
				{
					$scope.rows[n][2] = $scope.rows[n][1] + $scope.rows[n][2];
					$scope.game.currentScore += parseInt($scope.rows[n][2]);
					$scope.rows[n][1] = $scope.rows[n][0];
					$scope.rows[n][0] = ' ';
					movement = true;
				}
				if($scope.rows[n][1] == $scope.rows[n][0] && ($scope.rows[n][1] != ' ' || $scope.rows[n][0] != ' '))
				{
					$scope.rows[n][1] = $scope.rows[n][1] + $scope.rows[n][0];
					$scope.game.currentScore += parseInt($scope.rows[n][1]);
					$scope.rows[n][0] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == true && three == true && four == false)
			{
				if($scope.rows[n][2] == $scope.rows[n][1])
				{
					$scope.rows[n][3] = $scope.rows[n][2] + $scope.rows[n][1];
					$scope.game.currentScore += parseInt($scope.rows[n][3]);
					$scope.rows[n][2] = $scope.rows[n][0];
					$scope.rows[n][1] = ' ';
					$scope.rows[n][0] = ' ';
					movement = true;
				}
				else if($scope.rows[n][1] == $scope.rows[n][0])
				{
					$scope.rows[n][3] = $scope.rows[n][2];
					$scope.rows[n][2] = $scope.rows[n][1] + $scope.rows[n][0];
					$scope.game.currentScore += parseInt($scope.rows[n][2]);
					$scope.rows[n][1] = ' ';
					$scope.rows[n][0] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[n][3] = $scope.rows[n][2];
					$scope.rows[n][2] = $scope.rows[n][1];
					$scope.rows[n][1] = $scope.rows[n][0];
					$scope.rows[n][0] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == true && three == true && four == true)
			{
				if($scope.rows[n][3] == $scope.rows[n][2])
				{
					$scope.rows[n][3] = $scope.rows[n][3] + $scope.rows[n][2];
					$scope.rows[n][2] = $scope.rows[n][1];
					$scope.game.currentScore += parseInt($scope.rows[n][3]);
					$scope.rows[n][1] = ' ';
					movement = true;
				}
				else if($scope.rows[n][2] == $scope.rows[n][1])
				{
					$scope.rows[n][2] = $scope.rows[n][2] + $scope.rows[n][1];
					$scope.game.currentScore += parseInt($scope.rows[n][2]);
					$scope.rows[n][1] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == true && three == false && four == true)
			{
				if($scope.rows[n][3] == $scope.rows[n][1])
				{
					$scope.rows[n][3] = $scope.rows[n][1] + $scope.rows[n][3];
					$scope.game.currentScore += parseInt($scope.rows[n][3]);
					$scope.rows[n][2] = $scope.rows[n][0];
					$scope.rows[n][1] = ' ';
					$scope.rows[n][0] = ' ';
					movement = true;
				}
				else if($scope.rows[n][1] == $scope.rows[n][0])
				{
					$scope.rows[n][2] = $scope.rows[n][0] + $scope.rows[n][1];
					$scope.game.currentScore += parseInt($scope.rows[n][2]);
					$scope.rows[n][1] = ' ';
					$scope.rows[n][0] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[n][2] = $scope.rows[n][1];
					$scope.rows[n][1] = $scope.rows[n][0];
					$scope.rows[n][0] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == false && three == true && four == true)
			{
				if($scope.rows[n][3] == $scope.rows[n][2])
				{
					$scope.rows[n][3] = $scope.rows[n][3] + $scope.rows[n][2];
					$scope.game.currentScore += parseInt($scope.rows[n][3]);
					$scope.rows[n][2] = $scope.rows[n][0];
					$scope.rows[n][0] = ' ';
					movement = true;
				}
				else if($scope.rows[n][2] == $scope.rows[n][0])
				{
					$scope.rows[n][2] = $scope.rows[n][0] + $scope.rows[n][2];
					$scope.game.currentScore += parseInt($scope.rows[n][2]);
					$scope.rows[n][0] = ' ';
					movement = true;
				}
				else 
				{
					$scope.rows[n][1] = $scope.rows[n][0];
					$scope.rows[n][0] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == true && three == false && four == false)
			{
				if($scope.rows[n][0] == $scope.rows[n][1])
				{
					$scope.rows[n][3] = $scope.rows[n][1] + $scope.rows[n][0];
					$scope.game.currentScore += parseInt($scope.rows[n][3]);
					$scope.rows[n][1] = ' ';
					$scope.rows[n][0] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[n][3] = $scope.rows[n][1];
					$scope.rows[n][2] = $scope.rows[n][0];
					$scope.rows[n][1] = ' ';
					$scope.rows[n][0] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == true && three == true && four == false)
			{
				if($scope.rows[n][2] == $scope.rows[n][1])
				{
					$scope.rows[n][3] = $scope.rows[n][1] + $scope.rows[n][2];
					$scope.game.currentScore += parseInt($scope.rows[n][3]);
					$scope.rows[n][1] = ' ';
					$scope.rows[n][2] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[n][3] = $scope.rows[n][2];
					$scope.rows[n][2] = $scope.rows[n][1];
					$scope.rows[n][1] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == false && three == true && four == true)
			{
				if($scope.rows[n][3] == $scope.rows[n][2])
				{
					$scope.rows[n][3] = $scope.rows[n][3] + $scope.rows[n][2];
					$scope.game.currentScore += parseInt($scope.rows[n][3]);
					$scope.rows[n][2] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == false && three == false && four == true)
			{
				if($scope.rows[n][0] == $scope.rows[n][3])
				{
					$scope.rows[n][3] = $scope.rows[n][0] + $scope.rows[n][3];
					$scope.game.currentScore += parseInt($scope.rows[n][3]);
					$scope.rows[n][0] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[n][2] = $scope.rows[n][0];
					$scope.rows[n][0] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == false && three == true && four == false)
			{
				if($scope.rows[n][0] == $scope.rows[n][2])
				{
					$scope.rows[n][3] = $scope.rows[n][0] + $scope.rows[n][2];
					$scope.game.currentScore += parseInt($scope.rows[n][3]);
					$scope.rows[n][2] = ' ';
					$scope.rows[n][0] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[n][3] = $scope.rows[n][2];
					$scope.rows[n][2] = $scope.rows[n][0];
					$scope.rows[n][0] = ' ';
					movement = true;
				}
			}
			else if(one == false && two == true && three == false && four == true)
			{
				if($scope.rows[n][1] == $scope.rows[n][3])
				{
					$scope.rows[n][3] = $scope.rows[n][1] + $scope.rows[n][3];
					$scope.game.currentScore += parseInt($scope.rows[n][3]);
					$scope.rows[n][1] = ' ';
					movement = true;
				}
				else
				{
					$scope.rows[n][2] = $scope.rows[n][1];
					$scope.rows[n][1] = ' ';
					movement = true;
				}
			}
			else if(one == true && two == false && three == false && four == false)
			{
				$scope.rows[n][3] = $scope.rows[n][0];
				$scope.rows[n][0] = ' ';
				movement = true;
			}
			else if(one == false && two == true && three == false && four == false)
			{
				$scope.rows[n][3] = $scope.rows[n][1];
				$scope.rows[n][1] = ' ';
				movement = true;
			}
			else if(one == false && two == false && three == true && four == false)
			{
				$scope.rows[n][3] = $scope.rows[n][2];
				$scope.rows[n][2] = ' ';
				movement = true;
			}
			
			one = false;
			two = false;
			three = false;
			four = false;
		}
		$scope.checkgoal();
		$scope.checkgameover();
		if(movement) {
			$scope.addRandom();
		}
    };
    $scope.keyboard = function(keyevent) {
    	if(keyevent.which === 38 || keyevent.which === 87)
    	{
    		$scope.upFunc();
    	}
    	else if(keyevent.which === 40 || keyevent.which === 83)
    	{
    		$scope.downFunc();
    	}
    	else if(keyevent.which === 37 || keyevent.which === 65)
    	{
    		$scope.leftFunc();
    	}
    	else if(keyevent.which === 39 || keyevent.which === 68)
    	{
    		$scope.rightFunc();
    	}
    };
    $scope.checkgameover = function() {
    	var n = 0;
		var one = false;
		var two = false;
		var three = false;
		var four = false;
		var movement = false;
		for(n; n < 4; n++)
		{
			if($scope.rows[3][n] != ' ')
			{
				four = true;
			}
			if($scope.rows[2][n] != ' ')
			{
				three = true;
			}
			if($scope.rows[1][n] != ' ')
			{
				two = true;
			}
			if($scope.rows[0][n] != ' ')
			{
				one = true;
			}
			if(one == true && two == true && three == true && four == true)
			{
				if($scope.rows[1][n] == $scope.rows[0][n])
				{
					movement = true;
				}
				if($scope.rows[1][n] == $scope.rows[2][n])
				{
					movement = true;
				}
				if($scope.rows[2][n] == $scope.rows[3][n] && ($scope.rows[2][n] != ' ' || $scope.rows[3][n] != ' '))
				{
					movement = true;
				}
			}
			else
			{
				movement = true;
			}
			one = false;
			two = false;
			three = false;
			four = false;
		}

		n = 0;
		one = false;
		two = false;
		three = false;
		four = false;
		for(n; n < 4; n++)
		{
			if($scope.rows[n][3] != ' ')
			{
				four = true;
			}
			if($scope.rows[n][2] != ' ')
			{
				three = true;
			}
			if($scope.rows[n][1] != ' ')
			{
				two = true;
			}
			if($scope.rows[n][0] != ' ')
			{
				one = true;
			}
			if(one == true && two == true && three == true && four == true)
			{
				if($scope.rows[n][1] == $scope.rows[n][0])
				{
					movement = true;
				}
				if($scope.rows[n][1] == $scope.rows[n][2])
				{
					movement = true;
				}
				if($scope.rows[n][2] == $scope.rows[n][3] && ($scope.rows[n][2] != ' ' || $scope.rows[n][3] != ' '))
				{
					movement = true;
				}
			}
			else
			{
				movement = true;
			}
		}
		if(!movement && $scope.game.gameOver == 0) {
			alert("Congratulations you got a score of " + $scope.game.currentScore);
			$scope.game.gameOver = 1;
		}
    };
    $scope.checkgoal = function() {
    	var i = 0;
    	var j = 0;

    	for(i; i < $scope.rows.length; i++){
    		for(j; j < $scope.rows.length; j++){
    			if($scope.rows[i][j] >= 2048 && $scope.game.goalMet == 0){
    				alert("Congratulations you reached 2048!\nTry to get to 4096");
    				$scope.game.goalMet = 1;
    			}
    		}
    	}
    };
	$scope.rows = [[' ', ' ', ' ', ' '],
				   [' ', ' ', ' ', ' '],
				   [' ', ' ', ' ', ' '],
				   [' ', ' ', ' ', ' ']];
	//Initial random placement of 2s
	var min = 0;
	var max = 4;
	var r1 = Math.floor(Math.random() * (max - min)) + min;
	var r2 = Math.floor(Math.random() * (max - min)) + min;
	var r3 = Math.floor(Math.random() * (max - min)) + min;
	var r4 = Math.floor(Math.random() * (max - min)) + min;
	if(r1 == 0)
	{
		if($scope.rows[0][r2] == ' ')
		{
			$scope.rows[0][r2] = 2;
		}
		else 
		{
			r1 = 1;
		}
	}
	if(r1 == 1)
	{
		if($scope.rows[1][r2] == ' ')
		{
			$scope.rows[1][r2] = 2;
		}
		else 
		{
			r1 = 2;
		}
	}
	if(r1 == 2)
	{
		if($scope.rows[2][r2] == ' ')
		{
			$scope.rows[2][r2] = 2;
		}
		else 
		{
			r1 = 3;
		}
	}
	if(r1 == 3)
	{
		if($scope.rows[3][r2] == ' ')
		{
			$scope.rows[3][r2] = 2;
		}
		else
		{
			$scope.rows[0][r2] = 2;
		}
	}
	if(r3 == 0)
	{
		if($scope.rows[0][r4] == ' ')
		{
			$scope.rows[0][r4] = 2;
		}
		else 
		{
			r3 = 1;
		}
	}
	if(r3 == 1)
	{
		if($scope.rows[1][r4] == ' ')
		{
			$scope.rows[1][r4] = 2;
		}
		else 
		{
			r3 = 2;
		}
	}
	if(r3 == 2)
	{
		if($scope.rows[2][r4] == ' ')
		{
			$scope.rows[2][r4] = 2;
		}
		else 
		{
			r3 = 3;
		}
	}
	if(r3 == 3)
	{
		if($scope.rows[3][r4] == ' ')
		{
			$scope.rows[3][r4] = 2;
		}
		else
		{
			$scope.rows[0][r4] = 2;
		}
	}
	$scope.addRandom = function() 
	{
		var added = false;
		var min;
		var max;
		var rA1;
		var rA2;
		var choice;
		var checkCount = 0;
		for(var k = 0; k < 4; k++)
		{
			if($scope.rows[0][k] != ' ')
			{
				checkCount++;
			}
			if($scope.rows[1][k] != ' ')
			{
				checkCount++;
			}
			if($scope.rows[2][k] != ' ')
			{
				checkCount++;
			}
			if($scope.rows[3][k] != ' ')
			{
				checkCount++;
			}
		}
		if(checkCount == 16)
		{
			//Board Full
			added = true;
		}
		while(added == false)
		{
			min = 0;
			max = 4;
			rA1 = Math.floor(Math.random() * (max - min)) + min;
			rA2 = Math.floor(Math.random() * (max - min)) + min;
			choice = Math.floor(Math.random() * (max - min)) + min;
			if(rA1 == 0)
			{
				if($scope.rows[0][rA2] == ' ')
				{
					if(choice == 3)
					{
						$scope.rows[0][rA2] = 4;
						added = true;
					}
					else
					{
						$scope.rows[0][rA2] = 2;
						added = true;
					}
				}
			}
			if(rA1 == 1)
			{
				if($scope.rows[1][rA2] == ' ')
				{
					if(choice == 3)
					{
						$scope.rows[1][rA2] = 4;
						added = true;
					}
					else
					{
						$scope.rows[1][rA2] = 2;
						added = true;
					}
				}
			}
			if(rA1 == 2)
			{
				if($scope.rows[2][rA2] == ' ')
				{
					if(choice == 3)
					{
						$scope.rows[2][rA2] = 4;
						added = true;
					}
					else 
					{
						$scope.rows[2][rA2] = 2;
						added = true;
					}
				}
			}
			if(rA1 == 3)
			{
				if($scope.rows[3][rA2] == ' ')
				{
					if(choice == 3)
					{
						$scope.rows[3][rA2] = 4;
						added = true;
					}
					else 
					{
						$scope.rows[3][rA2] = 2;
						added = true;
					}
				}
			}
		}
	}
}]);