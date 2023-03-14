import Alert from '@football/app/components/modal/Modal';
import React, { Component } from 'react';

const AppContext = React.createContext({});
export const AppConsumer = AppContext.Consumer;

const alertInitialState = {
    title: '',
    subTitle: '',
    option1: '',
    option2: '',
    onOption1: () => {},
    onOption2: () => {},
};

export interface IAlertData {
    title: string;
    subTitle: string;
    option1: string;
    option2: string;
    onOption1: void;
    onOption2: void;
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
        const { title, subTitle, onOption1, onOption2, option1, option2 } = alertData;
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
                    onOption1={onOption1}
                    onOption2={onOption2}
                    option1={option1}
                    option2={option2}
                    onDismiss={this.closeAlert}
                />
            </AppContext.Provider>
        );
    }
}
