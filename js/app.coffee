window.App = {}
App.Models = {}
App.Views = {}

class App.Models.Todo extends Backbone.Model


class App.Views.Todo extends Backbone.View
  tagName: 'li'

  template: ->
    $('#todoTemplate').html()

  templateData: ->
    title: @model.get('title')
    done: @model.get('done')

  render: ->
    @$el.html _.template(@template(), @templateData(), {variable: 'todo'})
    this

  events:
    'click' : 'onclick'

  onclick: (e)->
    @model.set done: !@model.get('done')
    @render()

class App.Views.TodoList extends Backbone.View

  render: ->
    @$el.empty()

    for m in @collection.models
      v = new App.Views.Todo model: m
      v.render()
      @$el.append v.$el

$ ->
  todo = new App.Models.Todo
  todo.set title: 'Learn Ruby', done: false

  todo2 = new App.Models.Todo
  todo2.set title: '?', done: true

  todo3 = new App.Models.Todo
  todo3.set title: 'Profit', done: false

  collection = new Backbone.Collection [todo, todo2, todo3]

  todoView = new App.Views.TodoList el: '#todos', collection: collection
  todoView.render()
