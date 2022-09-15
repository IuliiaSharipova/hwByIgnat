import React from 'react';
import s from './Error404.module.css';

function Error404() {
    return (
        <div>
            {/* <div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>*/}

            <div className={s.wrapper}>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png" alt="404 Image"/>
                <main>
                    <h1>Sorry!</h1>
                    <p>
                        Page not found!
                    </p>
                </main>
            </div>
        </div>
    );
}

export default Error404;
