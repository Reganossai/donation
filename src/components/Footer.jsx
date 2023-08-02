import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone,faComment,faCirclePlay} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='first-conti'>
        <div className='first-conti-one'>
        <img src='https://allgodschildren.org/wp-content/uploads/2020/12/sponsor-ecfa.png.webp' alt='lop'/>
        <img src='https://allgodschildren.org/wp-content/uploads/2020/12/sponsor-cafo.png.webp' alt='lop'/>
        <img src='https://allgodschildren.org/wp-content/uploads/2020/12/sponsor-iaame-logo.png.webp' alt='lop'/>
        <img src='https://allgodschildren.org/wp-content/uploads/2020/12/CFC_logo_Smal2.png.webp' alt='lop'/>
        <img src='https://allgodschildren.org/wp-content/uploads/2021/03/TBRI-Ambassador-300x200.png' alt='lop'/>
        <img src='https://allgodschildren.org/wp-content/uploads/2021/03/EIG-Certified-Transparent-Logo-gray-no-border.png' alt='lop'/>
        <img src='https://allgodschildren.org/wp-content/uploads/2021/03/profile-GOLD2023-seal_transparency-reverse_Compressed-150x150.png' alt='lop'/>
        </div>
        <hr className='hir'/>
        <div className='first-conti-two'>
            <div className='first-conti-two-sub'>
                <h1>get to know us</h1>
                <p><span><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEX///+AgIB9fX3g4OB4eHi9vb3a2tqoqKj39/eenp6ioqKFhYXq6uqsrKywsLD4+PjR0dHw8PCXl5eTk5PExMSNjY20tLTHx8e5ubnt7e3k5OTV1dV0dHRvb2/2AIr3AAADyElEQVR4nO3da3eiMBSFYQl3QVDkUuvM//+bo512Vu2g0wOZnJ24337vyrNoIUIim41WbVuc4v1+mqb+UjpT/9Gr2iAXVhzqrG/KwSTvmTslbz/mR689YknFBbc7RldV9N0Sf4RFPDVdJMG9C1vtkX+vetoNRqrzSFiPXbWEdxWmHgiLcYiW8S4ZD4TTcp4XwnqbrPDhC9v9sOYA4guLtFoJBBcWzap/QXxhm6/lXYUvwMJ89QEEFzY2gMjC3oYPWZitvUx8CEdQ4am0A4QVtqkdH64wtvQ3CitsR1tAVGFtywcr3Fk7hBdhoa2Z6WAPGJkGUdiv+0jogdDaiRRVWFs8hJjC3uIhxBTamrD9Fu7whIfKIhDyGJ7tCgGPobVJN6zQys0LZGFr9USDKKyPoQvjwSYwMjmccG/1VIoonIIXLruLeG+9gknwhPLLoUmi4dh15XwpnPBFeCo1Vd6fs/i1vtNBG/RXwptQpszwDI+TCc3xpD1gcbIHMuasPV55MuGgPVx5rehOosm1xytPJvRo1dqfWtGHp8TDf8NCJvRu9ahY6N+1Qir07Wp/6bAVnUvDF8JNq/8dhV+EkI8/H0fh0wm1h7ugE4UUwicTRtrDXRCFt1Xaw10Qhc8m9PBWG4W3GQoRo9B/oejTkzlqD/dRRTzbuROdS+d/yedqNWH2M5lN9oB0/nd86ofec/zM5jrZ+ynuP3QkTCYtoDOh3tMpR8IoC11YxYELzaD3hNGRsFO8HroRlnrPUB0Jc70njI6EipsRHAkVt3I7EqZqQFdCvUmbqyv+PnRhpbhoyo1w0JuWuhGao9601JGwU1z45kZY6k1LHQm3isvC3Ag193W5ETZ6QEfCl+CFitNSR1d8zZXuToSV4rTUjXDQXMvvQmgGxUmbG+FRc7eCE2GnuVvBibDUXAfuRLhVBLoR7kIXRmPwQs1JmyXh3X3416JBc0qzyUw1mwhY5TPt3mrGMZ1Ut0Ud9rNNstUmRVt8rX1Lk/Y42Yqh8NdEUYgYhRTiF9DqyztRSCF+FFKIH4UU4sdZ27MdQwoRo5BC/Cj0Xyj6vjYKIaOQQvxkwk57uAuikEL8KKQQPwopxI9CCvGjkEL8KKQQv/CFovfMUAgZhRTiJxOW2sNdEIUU4vcEQsnbASmEjEIK8ZMJVffbL4xCCvGjkEL8KHw2oYevVqcwAOGmoZBC+CikED8KKcSPQgrxo5BC/Ci8Eap+i+7SwheOFFIIH4UU4kfhjVDzZUeLo5BC/CikEL/whU3y8K0cNyVeCs+poP/90rFfyOljxIf+cRYAAAAASUVORK5CYII=' className="fontawesome-facebook" alt='fofo'/></span>facebook</p>
                <p><span><img src='data:image/png;base64,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'  className="fontawesome-facebook" alt='fofo'/></span>instagram</p>
                <p><span> <FontAwesomeIcon icon={faMicrophone} className="fontawesome-facebook" /></span>podcast</p>
                <p><span><FontAwesomeIcon icon={faComment} className="fontawesome-facebook"/></span>blog</p>
                <p><span><FontAwesomeIcon icon={faCirclePlay} className="fontawesome-facebook" /></span>videos</p>
                <p><span><img src='data:image/png;base64,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' className='fontawesome-facebook' alt='tel'/></span>join our mailing list</p>
            </div>

            
            <div className='first-conti-two-sub'>
                <h1>connect</h1>
                
                <p>contact us</p>
                <p>503-282-7652</p>
      

                
            </div>

            
            <div className='first-conti-two-sub'>
                <h1>about us</h1>

                
                <p>about us</p>
                <p>our team</p>
                <p>financial accountability</p>
                <p>privacy policy</p>
                <p>careers</p>
            </div>

            
            <div className='first-conti-two-sub'>
                <h1>make a difference</h1>
                
                <p>sponsor</p>
                <p>adopt</p>
                <p>donate</p>
                <p>prayer team</p>
                <p>family login</p>
                <p>payments</p>
                
            </div>
        </div>

        <div className='first-conti-last'>
            <h5>All God’s Children International™ is a registered 501(c)3 nonprofit organization and all donations are tax deductible. EIN: 93-1052909. 1400 NE 136th Avenue, Suite 201 Vancouver, WA 98684</h5>
        </div>
    

    </div>
  )
}

export default Footer