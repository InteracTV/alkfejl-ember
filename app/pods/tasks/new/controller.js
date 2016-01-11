import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newTask(formData) {
            console.log(formData);
            this.store.createRecord('task', Object.assign({
                //date: Date.now().toString(),
                location: 'nappali',
                description: 'feladat',
            }, formData));
            this.transitionToRoute('tasks.list')
        }
    }
});
