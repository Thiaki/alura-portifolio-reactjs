import React from 'react';

import 'styles/pages/error.sass'

const Error404 = () => {
    return (
        <main>
            <div className='container'>
                <h1>404</h1>
                <h3>Ops! Página não encontrada.</h3>
                <p>Tem certeza de que era isso que você estava procurando? <br /> Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>
                <img src='https://s3-alpha-sig.figma.com/img/6b16/23c7/be590854ae0fb25df6c3fa563188105c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DmzPMT2lWwYGqsWzWEh~2lURBGsLQoZ2YxNqE-Lm55OaKF8tWCGgd8XyP-~tWuux~Tyh9LiajFR~GGL8XPWWu2x2VwfV7PA2Z2~cgO4rvXfekgsLl4RDlaLDzRvod3pkXNknewdUtU3hoz8G80kz065geEgxIQGqjfrCPQD50v7Qd8DjKZb9ppDuoQR-A2o7Thx4yvugxrBrjCnc2u9OKvtGQcEuho9oXNi5K9-MYB9O0u32Mn6nGnvrH9L3RmazaoR~Y3of8A231LKBoWWpkhNagbHxXe2Whp3eEPwfbidOkmtIfp45TagjvPHpB4Y3Er2rPmGYdmt3Xa9gPR9yMQ__' alt=''/>
                <br />
                <button>Voltar</button>
            </div>
        </main>
    )
}

export default Error404;
