import Ember from 'ember';

export default Ember.Component.extend({
    tasks: Ember.Object.create(),
    hasTasks: false,
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
            // this.sendAction('onSave', {
                location: this.$('#helyszin').val(),
                description: this.$('#leiras').val(),
            });
        }
    },
    
    validate() {
        var location = this.$('#helyszin').val();
        var description = this.$('#leiras').val();
        
        this.set('tasks.location', location === '' ? 'Név kötelező' : '');
        this.set('tasks.description', description === '' ? 'Leírás kötelező' : '');

        return this.get('tasks.location') === '' &&
               this.get('tasks.description') === '';
    }
});
