// Generated by CoffeeScript 1.6.3
(function() {
  var _ref, _ref1, _ref2,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.App = {};

  App.Models = {};

  App.Views = {};

  App.Models.Todo = (function(_super) {
    __extends(Todo, _super);

    function Todo() {
      _ref = Todo.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    return Todo;

  })(Backbone.Model);

  App.Views.Todo = (function(_super) {
    __extends(Todo, _super);

    function Todo() {
      _ref1 = Todo.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    Todo.prototype.tagName = 'li';

    Todo.prototype.template = function() {
      return $('#todoTemplate').html();
    };

    Todo.prototype.templateData = function() {
      return {
        title: this.model.get('title'),
        done: this.model.get('done')
      };
    };

    Todo.prototype.render = function() {
      this.$el.html(_.template(this.template(), this.templateData(), {
        variable: 'todo'
      }));
      return this;
    };

    Todo.prototype.events = {
      'click': 'onclick'
    };

    Todo.prototype.onclick = function(e) {
      this.model.set({
        done: !this.model.get('done')
      });
      return this.render();
    };

    return Todo;

  })(Backbone.View);

  App.Views.TodoList = (function(_super) {
    __extends(TodoList, _super);

    function TodoList() {
      _ref2 = TodoList.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    TodoList.prototype.render = function() {
      var m, v, _i, _len, _ref3, _results;
      this.$el.empty();
      _ref3 = this.collection.models;
      _results = [];
      for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
        m = _ref3[_i];
        v = new App.Views.Todo({
          model: m
        });
        v.render();
        _results.push(this.$el.append(v.$el));
      }
      return _results;
    };

    return TodoList;

  })(Backbone.View);

  $(function() {
    var collection, todo, todo2, todo3, todoView;
    todo = new App.Models.Todo;
    todo.set({
      title: 'Learn Ruby',
      done: false
    });
    todo2 = new App.Models.Todo;
    todo2.set({
      title: '?',
      done: true
    });
    todo3 = new App.Models.Todo;
    todo3.set({
      title: 'Profit',
      done: false
    });
    collection = new Backbone.Collection([todo, todo2, todo3]);
    todoView = new App.Views.TodoList({
      el: '#todos',
      collection: collection
    });
    return todoView.render();
  });

}).call(this);
