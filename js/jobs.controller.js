myApp.controller('JobsController', ['$scope', function($scope) {
    me = this;
    me.jobs = [];

    for(var i = 0; i < 10; i++){
        newJob = {
            Id: i+1,
            Client: 'Vardenis Pavardenis',
            Worker: 'Geriausias Darbuotojas',
            Status: 'Laukia savo eilės',
            Cost: '100',
            Price: '120'
        }
        console.log(newJob);
        me.jobs.push(newJob);
    }
}]);