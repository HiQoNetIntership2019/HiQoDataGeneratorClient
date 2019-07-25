import React from 'react';

class ModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onCloseHandler = this.onCloseHandler.bind(this);
    }

    onCloseHandler() {
        if (confirm('Do you really want to exit? Changes will be lost!')) {
            if (this.props.onClose != undefined)
                this.props.onClose();
            $("#"+this.props.id).modal("hide");
        }
    }

    onClickHandler() {
        let needToClose = true;
        if (this.props.onSubmit != undefined){
            needToClose = this.props.onSubmit();
            console.log("after submit "+needToClose);
        }
        if (needToClose){
            $("#"+this.props.id).modal("hide");
        }
    }

    render(){
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h5 className="modal-title">{this.props.title}</h5>
                            <button type="button" className="close" onClick={this.onCloseHandler}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                {this.props.children}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={this.onClickHandler} className="btn btn-warning btn-block">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalWindow;
