import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function() {
  this.route('login', function() {
    this.route('password-reset')
  })

  this.route('protected', { path: '/' }, function() {
    this.resource('index', { path: '/' })

    this.resource('rt', function() {
      this.route('issues', { path: '/' })
    })

    this.resource('redmine', function() {
      this.route('issues', { path: '/' })
    })

    this.resource('timescout', function() {
      this.route('timesheet', { path: '/timesheet/:id' }, function() {
        this.route('index', { path: '/' })
      })
    })
  })
})

export default Router
