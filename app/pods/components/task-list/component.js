import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteTask(task) {
            task.deleteRecord();
            task.save();
        }
    }
});
