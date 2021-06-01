import React, {Component, Fragment} from 'react';
import Modal from 'react-bootstrap/Modal';

const WithErrorHandler = (Wrapper, axios) => {
    return class extends Component {
        state = {error: null}
        
        componentDidMount() {
            const myReq = axios.interceptors.request.use(res => {
                this.setState({error: null});
                return res;
            });
            const myRes = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.myReq);
            axios.interceptors.response.eject(this.myRes);
        }

        render() {
            return (
                <Fragment>
                    <Modal
                        size="sm"
                        show={this.state.error}
                        onHide={() => this.setState({error: null})}
                        style={{top: '30%'}}
                        aria-labelledby="example-modal-sizes-title-sm" >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-sm">
                                Server Connection
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {this.state.error && this.state.error.message}
                        </Modal.Body>
                    </Modal>
                    <Wrapper {...this.props} />
                </Fragment>
            )
        }
    }
}

export default WithErrorHandler;