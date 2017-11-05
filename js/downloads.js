$(function() {
	var Download = Backbone.Model.extend({
        idAttribute: "filename"
	});

    var DownloadList = Backbone.Collection.extend({
        model: Download,
        url: "https://www.jesterpm.net/downloads.jsonp",
        sync: function (method, collection, options) {
            options.dataType = "jsonp";
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
            this.message.html("Loading downloads... If downloads do not appear, please visit the old <a href=\"http://downloads.jesterpm.net/downloads\">downloads page</a>");
        },
        success: function() {
            this.message.empty();
        },
        failed: function() {
            this.message.html("Failed Loading downloads. Please visit the old <a href=\"http://downloads.jesterpm.net/downloads\">downloads page</a>");
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
