let React = require('react');

let TaskDraggableTd = React.createClass({
   render() {
       let taskDraggableTdStyle = {
           backgroundColor: "#265A88",
           borderRight: "none",
           borderLeft: "none",
           borderRadius: "2px",
           cursor: "pointer",
           height: "100%",
           backgroundClip: "padding-box",
       };
       return (
         <td draggable="true"
             className={this.props.className}
             style={taskDraggableTdStyle}
             key={this.props.keyProp}
             id={this.props.id}
             onClick={this.props.onClick}
             onDragStart={this.props.onDragStart}
             onDragLeave={this.props.onDragLeave}
             onDragEnter={this.props.onDragEnter}
             onDragOver={this.props.onDragOver}
             onDrop={this.props.onDrop}>
             <input id={this.props.inputId} type="hidden" value={this.props.date}/>
         </td>
       );
   }
});

TaskDraggableTd.PropTypes = {
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

module.exports = TaskDraggableTd;
