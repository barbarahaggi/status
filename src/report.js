import React from 'react';
import './report.css'


const today = new Date();

const month = today.getMonth()+1;
const year = today.getFullYear();
const date = today. getDate();
const currentDate = date + '/'+ month + '/' + year;



const Report = () => {
    return (
        <div className='container'>
            <h3 className='data'>{currentDate}</h3>
            <h2 className='titulo'>Ultimas atualizações</h2>
            <p className='reporte'>Lorem ipsum dolor sit amet. In voluptatem maiores
             ut quibusdam eius ut dolor aperiam id quis ipsum ut voluptas deserunt et
              consequuntur laborum ut dolore consectetur.</p>
        </div>
    )
}

 export default Report