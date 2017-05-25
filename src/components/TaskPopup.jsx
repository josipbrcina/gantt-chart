let React = require('react');
let TaskPopupViewData = require('./TaskPopupViewData.jsx');
let TaskPopupEditData = require('./TaskPopupEditData.jsx');

let TaskPopup = React.createClass({
    getInitialState() {
        return {
            editMode: false,
        };
    },
    componentWillReceiveProps(nextProps) {
        if (nextProps.popupTask) {
            this.setState({taskState: nextProps.popupTask});
        }
    },
    onClickEdit() {
        this.setState({editMode: true});
    },
    onClickClose() {
        this.setState({editMode: false});

        return this.props.onClickClose();
    },
    onClickCancel() {
        this.setState({editMode: false})
    },
    onClickSave() {
        this.props.saveTaskStateCb(this.state.taskState);
        this.setState({editMode: false});
    },
    updateTaskState(key, value) {
        let {taskState} = this.state;
        taskState[key] = value;
        this.setState({taskState});
    },
    renderDataComponent() {
        if (!this.state.editMode) {
            return <TaskPopupViewData taskFieldsRules={this.props.taskFieldsRules}
                                      popupTask={this.props.popupTask}/>
        } else {
            return <TaskPopupEditData taskFieldsRules={this.props.taskFieldsRules}
                                      popupTask={this.state.taskState}
                                      updateTaskStateCb={this.updateTaskState}/>
        }
    },
    renderButtons() {
        let buttonEditStyle = {
            color: "#265A88",
            fontWeight: 600
        };
        let buttonSaveStyle = {
            fontWeight: 600
        };
        let buttonCancelStyle = {
            fontWeight: 600
        };

        if (!this.state.editMode) {
            return (
                <div className="col-sm-12">
                    <button style={buttonEditStyle}
                            className="btn btn-default pull-right"
                            onClick={this.onClickEdit}>Edit
                    </button>
                </div>
            );
        } else {
            return (
                <div className="col-sm-12">
                    <button style={buttonSaveStyle}
                            className="btn btn-default pull-right"
                            onClick={this.onClickSave}>Save
                    </button>
                    <button style={buttonCancelStyle}
                            className="btn btn-danger pull-right"
                            onClick={this.onClickCancel}>Cancel
                    </button>
                </div>
            );
        }
    },
    render() {
        let popupCloseStyle = {
            cursor: "pointer",
            fontWeight: 600
        };

        let popupDivStyle = {
            MozBoxShadow: "0 0 30px 5px #999",
            WebkitBoxShadow: "0 0 30px 5px #999",
            position: "absolute",
            backgroundColor: "#265A88",
            color: "#ffffff",
            padding: 30
        };

        if (this.props.popupShow === false) {
            popupDivStyle.display = "none"
        }

        return (
            <div className="col-sm-3" style={popupDivStyle}>
                <div className="row">
                    <div className="col-sm-10">
                        {this.renderDataComponent()}
                    </div>
                    <div className="col-sm-2">
                        <span style={popupCloseStyle}
                              className="pull-right"
                              onClick={this.onClickClose}>X</span>
                    </div>
                </div>
                <div className="row">
                    {this.renderButtons()}
                </div>
            </div>
        );
    }
});

TaskPopup.propTypes = {
    popupTask: React.PropTypes.object,
    popupShow: React.PropTypes.bool,
    onClickClose: React.PropTypes.func,
    taskFieldRules: React.PropTypes.object,
    saveTaskStateCb: React.PropTypes.func
};

module.exports = TaskPopup;
