var expect = require('chai').expect;
var stravaStats = require('./index');

describe('strava-stats', function() {

    var firstname = 'Quentin';
    var nbActivities = 20;

    describe('athlete', function() {

        it('should be quentin the firstname', function() {
            expect(stravaStats.athlete.firstname).to.equal(firstname);
        });

    });

    describe('activities', function() {

        it('should be quentin the firstname', function() {
            expect(stravaStats.activities.length).to.equal(nbActivities);
        });

    });

});