import DS from 'ember-data';

const TaskModel = DS.Model.extend({
  location: DS.attr(),
  description: DS.attr(),
});

TaskModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            location: 'pc6',
            description: 'rossz'
        },
        {
            id: 2,
            location: 'pc7',
            description: 'még rosszabb'
        },
        
    ] 
});

export default TaskModel;
