let React = require('react');

let TaskNotDraggableTd = React.createClass({
    render() {
        let taskNotDraggableTdStyle = {
            backgroundColor: "#0077b3",
            borderRight: "none",
            borderLeft: "none",
            borderRadius: "2px",
            cursor: "pointer",
            height: "100%",
            backgroundClip: "padding-box",
        };
        return (
            <td draggable="false"
                className={this.props.className}
                style={taskNotDraggableTdStyle}
                key={this.props.keyProp}
                id={this.props.id}
                onClick={this.props.onClick}
                onDragLeave={this.props.onDragLeave}
                onDragEnter={this.props.onDragEnter}
                onDragOver={this.props.onDragOver}
                onDrop={this.props.onDrop}>
                <input id={this.props.inputId} type="hidden" value={this.props.date}/>
            </td>
        );
    }
});

TaskNotDraggableTd.PropTypes = {
    className: React.PropTypes.string,
    keyProp: React.PropTypes.string,
    id: React.PropTypes.string,
    onClick: React.PropTypes.func,
    onDragStart: React.PropTypes.func,
    onDragEnter: React.PropTypes.func,
    onDragOver: React.PropTypes.func,
    onDrop: React.PropTypes.func,
    inputId: React.PropTypes.string,
    date: React.PropTypes.number
};

module.exports = TaskNotDraggableTd;
