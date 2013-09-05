window.onload = (function() {
    console.log("Page loaded!")
});

var Person = Backbone.Model.extend({
    defaults: {
        name: 'John Doe',
        age: 30,
        occupation: 'worker'
    }
});

var PersonView = Backbone.View.extend({
    tagName : 'h1',
    
    template : _.template("<%= name %> (<%= age %>) - <%= occupation %>"),
    
    initialize : function() {
        this.render();
    },
    
    render : function() {
        this.$el.html(this.template(this.model.toJSON()));
    }
});

var person = new Person;
var personView = new PersonView({ model: person});
