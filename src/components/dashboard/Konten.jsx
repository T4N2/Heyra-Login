/* eslint-disable no-unused-vars */
import React from "react";

function Konten() {
    return <div className="main-badan">
        <div className="content">
            <div className="second-content">
            <div className="box"><img className="gambar" src="./images/satu.png"></img><div className="name pt-4"><p className="text-xs text-slate-700" >Text/Voice to Animation</p></div></div>
            <div className="box"><img className="gambar" src="./images/dua.png"></img><div className="name pt-4"><p className="text-xs text-slate-700" >Gesture to Text</p></div></div>
            <div className="box"><img className="gambar" src="./images/tiga.png"></img><div className="name pt-4"><p className="text-xs text-slate-700" >Forum Diskusi</p></div></div>
            <div className="box"><img className="gambar" src="./images/empat.png"></img><div className="name pt-4"><p className="text-xs text-slate-700" >Forum Diskusi</p></div></div>
            <div className="box"><img className="gambar" src="./images/lima.png"></img><div className="name pt-4"><p className="text-xs text-slate-700" >Panduan Pengguna</p></div></div>
            <div className="box"><img className="gambar" src="./images/enam.png"></img><div className="name pt-4"><p className="text-xs text-slate-700" >Heyloc</p></div></div>
            <div className="box"><img className="gambar" src="./images/tujuh.png"></img><div className="name pt-4"><p className="text-xs text-slate-700" >Hey Activity</p></div></div>
            <div className="box"><img className="gambar" src="./images/delapan.png"></img><div className="name pt-4"><p className="text-xs text-slate-700" >More</p></div></div>
        </div>
    </div>
    <div className="scroll">
        <div className="card"><img className="duagambar" src="./images/indo.png"></img></div>
        <div className="card"><img className="duagambar" src="./images/indo.png"></img></div>
        <div className="card"><img className="duagambar" src="./images/indo.png"></img></div>
        <div className="card"><img className="duagambar" src="./images/indo.png"></img></div>
    </div>
    <div className="third-content">
        <div className="sub-third">
            <h3 className="pt-3">Informasi Terkini</h3>
            <p className="text-xs pt-2">Jangan Kelewatan Informasi Terkini</p>
        </div>
        <button type="button" className="mr-4 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700">Lihat Semua</button>
        {/* <div className="baten">
        <p>Lihat Semua</p>
        </div>   */}
    </div>
    <div className="scroll">
        <div className="cord">
            <div className="image">
                <img className="imagee" src="./images/orang.png"></img>
                <img className="imageee" src="./images/hello.png"></img>
                <h4 className="sign">Welcome To <br></br>The World Of<br></br>Sign Language</h4>
            </div>
        </div>
        <div className="cord">
            <div className="image">
                <img className="imagee" src="./images/orang.png"></img>
                <img className="imageee" src="./images/hello.png"></img>
                <h4 className="sign">Welcome To <br></br>The World Of<br></br>Sign Language</h4>
            </div>
        </div>
        <div className="cord">
            <div className="image">
                <img className="imagee" src="./images/orang.png"></img>
                <img className="imageee" src="./images/hello.png"></img>
                <h4 className="sign">Welcome To <br></br>The World Of<br></br>Sign Language</h4>
            </div>
        </div>
    </div>
    </div>
}

export default Konten;