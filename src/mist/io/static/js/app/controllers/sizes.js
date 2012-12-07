define('app/controllers/sizes', [
    'app/models/size',
    'ember',
    'jquery'
    ],
    /**
     * Sizes controller
     *
     *
     * @returns Class
     */
    function(Size) {
        return Ember.ArrayController.extend({
            backend: null,

            init: function() {
                this._super();

                var that = this;
                $.getJSON('/backends/' + this.backend.id + '/sizes', function(data) {
                    var content = new Array();
                    data.forEach(function(item){
                        content.push(Size.create(item));
                    });
                    that.set('content', content);
                });
            }
        });
    }
);
