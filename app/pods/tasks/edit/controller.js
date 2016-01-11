import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyTask(formData) {
            console.log(formData);
            var task = this.get('model');
            // error.set('location', formData.location);
            // error.set('description', formData.description);
            task.setProperties(formData);
            return task.save().then(() => {
                this.transitionToRoute('tasks.list');
            });
        }
    }
});
