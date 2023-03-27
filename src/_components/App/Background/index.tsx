import React, { useEffect } from 'react'


const Background = () => {

    const useScript = (url:string) => {
        useEffect(() => {
            const script = document.createElement('script');
            script.src = url;
            script.async = true;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            }
        }, [url]);

    }


    return (
        <>  
            <span className="toptags"></span>
            <div className='container demo'>
                
                    <div id="large-header" className="large-header">
                        <canvas id='demo-canvas'></canvas>
                        <div>
                        <h2 className='main-title who'>
                        <span className="thin"> Hi,I'm Nabi, </span>
                        <span className="thin"> Frontend developer</span>     
   
                        </h2>
                        </div>
                        
                       
                    </div>
         
            </div>
            {useScript("https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js")}
            {useScript("https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js")}
            {useScript("https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js")}
            <span className="bottomtags"></span>
        </>
    )
}

export default Background