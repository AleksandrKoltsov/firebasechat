import React from 'react';
import Firebase from 'firebase';
import config from './config';
import './style.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        Firebase.initializeApp(config);
        console.log(config);
        this.state = {
            dev: []
        }
    }

    writeUserData = () => {
        Firebase.database().ref('/').set(this.state);
        console.log('data saved');
    }

    getUserData = () => {
        let ref = Firebase.database().ref('/');
        ref.on('value', snapshot => {
            const state = snapshot.val();
            this.setState(state);
        });
        console.log('data retrieved');
    }

    componentDidMount() {
        this.getUserData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.writeUserData();
        }
    }

    render() {
        const {dev} = this.state;
        return (
            <div className="main-cont">
                {dev.map(devl =>
                    <div key={devl.uid} className="msg-cont">
                        <div>
                            <h5 className="name">{devl.name}</h5>
                            <p className="msg">{devl.msg}</p>
                        </div>
                        <button onClick={ () => this.removeData(devl) } className="del">&#10008;</button>
                    </div>
                )}
                <div className='inp-cont'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='hidden' ref='uid'/>
                        <input type="text" ref='name' className="inp-name" placeholder="Name"/>
                        <input type="text" ref='msg' className="inp-msg" placeholder="Message"/>
                        <button type="submit" className="btnSend">Send</button>
                    </form>
                </div>
            </div>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let name = this.refs.name.value;
        let msg = this.refs.msg.value;
        let uid = this.refs.uid.value;

        if (uid && name && msg) {
            const {dev} = this.state;
            const devIndex = dev.findIndex(data => {
                return data.uid === uid
            });
            dev[devIndex].name = name;
            dev[devIndex].msg = msg;
            this.setState({dev});

        } else if (name && msg) {
            const uid = new Date().getTime().toString();
            const {dev} = this.state;
            dev.push({uid, name, msg});
            this.setState({dev});
        }
        // this.refs.name.value = '';
        this.refs.msg.value = '';
        this.refs.uid.value = '';
    }

    removeData = (devs) => {
        console.log(this.state);
        const { dev } = this.state;
        const newState = dev.filter(data => {
            return data.uid !== devs.uid;
        });
        this.setState({ dev: newState });
    }
}