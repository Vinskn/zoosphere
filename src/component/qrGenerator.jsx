import React, { useEffect, useRef } from "react";
import QrCreator from "qr-creator";

const QrGenerator = ({ id }) => {
    const qrRef = useRef(null);

    useEffect(() => {
        if (qrRef.current) {
            qrRef.current.innerHTML = '';
            QrCreator.render(
                {
                    text: id,
                    radius: 0.5,
                    ecLevel: "H",
                    color: {
                        dark: "#000000",
                        light: "#ffffff"
                    },
                    background: null
                },
                qrRef.current
            );
        }

        const qrCanvas = qrRef.current.querySelector('canvas');
        if (qrCanvas) {
            qrCanvas.style.width = "100%";
            qrCanvas.style.height = "auto";
        }
    }, [id]);

    return <div ref={qrRef}></div>;
};

export default QrGenerator;
