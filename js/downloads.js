$(function() {
    var Download = Backbone.Model.extend({
          idAttribute: "filename"
    });

    var DownloadList = Backbone.Collection.extend({
        model: Download,
        url: "https://ltbsre4iaf.execute-api.us-west-2.amazonaws.com/prod/summary",
        sync: function (method, collection, options) {
            options.dataType = "json";
            Backbone.sync(method, collection, options);
        }
    });

    var Downloads = new DownloadList;

    var DownloadView = Backbone.View.extend({
        tagName: "article",
        template: _.template($("#download-template").html()),
        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    var AppView = Backbone.View.extend({
        el: $("#dlcontent"),
        initialize: function() {
            this.message = this.$("#msg");
            this.listenTo(Downloads, 'add', this.addOne);
            this.listenTo(Downloads, 'reset', this.addAll);
            this.listenTo(Downloads, 'request', this.loading);
            this.listenTo(Downloads, 'sync', this.success);
            this.listenTo(Downloads, 'error', this.failed);
            Downloads.fetch();
        },
        loading: function() {
            this.message.html("Loading...");
        },
        success: function() {
            this.message.empty();
        },
        failed: function() {
            this.message.html("Failed to load downloads.");
        },
        addOne: function(download) {
            var view = new DownloadView({model: download});
            this.$el.append(view.render().el);
        },
        addAll: function() {
            Downloads.each(this.addOne, this);
        }
    });

    var App = new AppView;
});
