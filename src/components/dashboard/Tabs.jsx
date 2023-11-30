/* eslint-disable no-unused-vars */
import React from "react";

function Tabs() {
    return <div className="top">
        <div className="tab2"><img className="imej1" src="./images/rumah.png"></img><p>HOME</p> </div>
    <div className="tab">
        <div className="tab1"><img className="imej2" src="./images/history.png"></img><p>HISTORY</p> </div>
        <div className="tab3"><a href='.././profile' ><img className="imej3" src="./images/user.png"></img><p>PROFILE</p></a> </div>
    </div>
    </div>
}

export default Tabs;