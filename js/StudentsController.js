studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
  $scope.students = [];
  $scope.addStudent = function() {
    $scope.students.push({ name: $scope.studentName });
    $scope.studentName = null;
  };
  $scope.deleteStudent = function() {
    var index = $scope.students.indexOf(student)
    $scope.students.splice(index, 1);
  };
});