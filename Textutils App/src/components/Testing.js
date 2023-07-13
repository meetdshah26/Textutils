import React, { useState } from 'react'

export default function Testing() {
    let [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    let [btnText,setBtnText]=useState("Enable Dark Mode")
    let toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }

    return (
        <>
            <div className="row" >
                <div className="col-4" style={myStyle}>
                    <div className="list-group" id="list-tab" role="tablist" style={myStyle}>
                        <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
                        <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
                        <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
                        <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
                    </div>
                </div>
                <div className="col-8" style={myStyle}>
                    <div className="tab-content" id="nav-tabContent" style={myStyle}>
                        <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">jay swaminarayan</div>
                        <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">JAY SWAMINARAYAN</div>
                        <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">JS</div>
                        <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">js..</div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
            </div>
        </>
    )
}