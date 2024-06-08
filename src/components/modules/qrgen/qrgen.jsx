import React from 'react'
import QRCode from 'qrcode'
import ReactDOM from 'react-dom';
import {QRCodeSVG} from 'qrcode.react';

const qrgen = () => {
        return (
            <>


  <QRCodeSVG value="https://reactjs.org/" />,


            </>
        )
    }

export default qrgen