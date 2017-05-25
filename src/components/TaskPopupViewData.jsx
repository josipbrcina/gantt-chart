let React = require('react');
let Moment = require('moment');

let TaskPopupViewData = React.createClass({
    createDataList() {
        let spanStyle = {
            fontWeight: 600
        };
        let fieldRules = this.props.taskFieldsRules.taskOptionalFieldsRules;
        dataList = [];
        let task = this.props.popupTask;

        // Generate list items for each task field except _id
        for (let prop in task) {
            if (task.hasOwnProperty(prop) && prop !== '_id' && prop !== 'startDate' && prop !== "endDate") {
                dataList.push(
                    <li key={prop}><span style={spanStyle}>{fieldRules[prop].label}</span>: {task[prop]}</li>
                );
            } else if (task.hasOwnProperty(prop) && prop !== '_id' && (prop === 'startDate' || prop === "endDate")) {
                dataList.push(
                    <li key={prop}><span style={spanStyle}>{fieldRules[prop].label}</span>: {Moment.unix(task[prop]).format('DD MMM YYYY')}</li>
                );
            }
        }

        return dataList;
    },
    render() {
        return (
            <ul>
                {this.createDataList()}

            </ul>
        );
    }
});

TaskPopupViewData.propTypes = {
    taskFieldsRules: React.PropTypes.object,
    popupTask: React.PropTypes.object
};

module.exports = TaskPopupViewData;
