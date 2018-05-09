angular.module('alurapic')
    .controller('FotoController', function($scope, $http, $location) {
        $scope.foto = {};
        $scope.mensagem = '';

        $scope.submeter = function() {
            
            if($scope.formulario.$valid) {
                $http.post('/v1/fotos', $scope.foto)
                    .success(function() {
                        $scope.mensagem = 'Foto adicionada com sucesso';
                        $scope.foto = {};
                        $scope.formulario.$setPristine(); 
                        $scope.formulario.$setUntouched();
                    })
                    .error(function(erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível cadastrar a foto';
                    });
            }
        };
    });
