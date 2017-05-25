let React = require('react');

let TaskPlainTd = React.createClass({
    render() {
        return (
            <td className={this.props.className}
                key={this.props.keyProp}
                id={this.props.id}
                onDragLeave={this.props.onDragLeave}
                onDragEnter={this.props.onDragEnter}
                onDragOver={this.props.onDragOver}
                onDrop={this.props.onDrop}
                >
                <input id={this.props.inputId} type="hidden" value={this.props.date}/>
            </td>
        );
    }
});

TaskPlainTd.PropTypes = {
    className: React.PropTypes.string,
    keyProp: React.PropTypes.string,
    id: React.PropTypes.string,
    onDragEnter: React.PropTypes.func,
    onDragOver: React.PropTypes.func,
    onDrop: React.PropTypes.func,
    inputId: React.PropTypes.string,
    date: React.PropTypes.number
};

module.exports = TaskPlainTd;
