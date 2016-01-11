import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newTask(formData) {
            console.log(formData);
            var task = this.store.createRecord('task', Object.assign({
                //date: Date.now().toString(),
                location: 'helyszín',
                description: 'feladat',
            }, formData));
            task.save();
            $('.modal').modal('hide');
            //this.send('removeModal');
            //this.transitionToRoute('errors.list')
        },
        alma() {
            console.log(42);
        }
    }
});
