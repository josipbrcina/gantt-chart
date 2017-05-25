let React = require('react');

let TaskPopupEditData = React.createClass({
    onFieldChange(field, e) {
        this.props.updateTaskStateCb(field, e.target.value);
    },
    createFormFields() {
        let editFieldDivStyle = {
            marginBottom: "30px"
        };
        let fields = [];
        let fieldRules = this.props.taskFieldsRules.taskOptionalFieldsRules;
        let mandatoryFields = this.props.taskFieldsRules.taskMandatoryFields;
        let editableFields = this.props.taskFieldsRules.taskEditableFields;

        // Intersect mandatory fields array and editable fields
        const fieldsToRenderArray = editableFields.filter(function (n) {
            return mandatoryFields.indexOf(n) !== -1;
        });

        // Render task input fields and custom buttons
        const renderFields = function (field, index) {
            if (fieldRules[field].inputType !== 'button') {
                fields.push(
                    <div key={index} style={editFieldDivStyle}>
                        <label key={index} htmlFor={index}>{fieldRules[field].label}</label>
                        <input className="form-control"
                               key={field + index}
                               type={fieldRules[field].inputType}
                               name={fieldRules[field].name}
                               onChange={this.onFieldChange.bind(this, field)}
                               value={this.props.popupTask[field]}
                        />
                    </div>
                );
            } else {
                fields.push(
                    <div key={index} style={editFieldDivStyle}>
                        <buton className="btn btn-default"
                               key={field + index}
                               type={fieldRules[field].inputType}
                               name={fieldRules[field].name}
                               onClick={fieldRules[field].onClick(this.props.popupTask)}>
                            {fieldRules[field].label}
                        </buton>
                    </div>
                );
            }
        };

        fieldsToRenderArray.forEach(renderFields.bind(this));

        return fields;
    },
    render() {
        return (
            <div>
                {this.createFormFields()}
            </div>
        );
    }
});

TaskPopupEditData.PropTypes = {
    taskFieldsRules: React.PropTypes.object,
    popupTask: React.PropTypes.object,
    updateTaskStateCb: React.PropTypes.func
};

module.exports = TaskPopupEditData;
