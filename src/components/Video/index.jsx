import React, { useEffect } from 'react';

const FacebookVideo = ({link}) => {

    useEffect(() => {
        // Cargar el SDK de Facebook si no está ya cargado
        if (!window.FB) {
            const script = document.createElement('script');
            script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = () => {
                if (window.FB) {
                    window.FB.XFBML.parse(); // Fuerza el renderizado del plugin de Facebook
                }
            };
        } else {
            window.FB.XFBML.parse(); // Si ya está cargado, solo procesamos los nuevos plugins
        }
    }, []);


    return (
        <>
            <div className="fb-video" 
                 data-href= {link} 
                 data-allowfullscreen="true" 
                 data-width="500">
            </div>
        </>
    );
}

export default FacebookVideo;
