import Alert from '@football/app/components/modal/Modal';
import React, { Component } from 'react';

const AppContext = React.createContext({});
export const AppConsumer = AppContext.Consumer;

const alertInitialState = {
    title: '',
    subTitle: '',
    submitFunc: () => {},
};

export interface IAlertData {
    title: string;
    subTitle: string;
    submitFunc: () => void;
}

export class AppProvider extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            alertData: alertInitialState,
            alertVisible: false,
        };
    }

    showAlert = (alertData: IAlertData) => {
        this.setState({
            alertData,
            alertVisible: true,
        });
    };

    closeAlert = () => {
        this.setState({ alertVisible: false, alertData: alertInitialState });
    };

    render() {
        const { alertData, alertVisible } = this.state;
        const { title, subTitle, submitFunc } = alertData;
        const funcs = {
            showAlert: this.showAlert,
            closeAlert: this.closeAlert,
        };
        return (
            <AppContext.Provider value={{ ...funcs }}>
                {this.props.children}
                {/* other global component  */}

                <Alert
                    visible={alertVisible}
                    title={title}
                    subTitle={subTitle}
                    onClose={this.closeAlert}
                    onDismiss={this.closeAlert}
                    onOk={submitFunc}
                />
            </AppContext.Provider>
        );
    }
}
