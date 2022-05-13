import React from 'react';
import FullTimeSidebar from '../FullTimeSidebar/FullTimeSidebar';
import './FullTimeDocuments.css'
import Zip from '../../../../utiles/test.zip'
import docImg from '../../../../utiles/docLogo.png'

const FullTimeDocuments = () => {
    return (
        <div className='FTD_container'>
            <div className="FTD_wrapper">
                <FullTimeSidebar className="documents_sidebar" />
                <div className="FTD_block">
                    <h2 className='fulltime_title'>Очный курс</h2>
                    <p><span>Очный конкурс проводится в дни весенних школьных каникул (в последние субботу и воскресенье марта). Ориентировочно вопросы очного конкурса соответствуют указанным темам заочного. Особо обращается внимание на знание географии, физики, химии и биологии в приложении к наукам о Земле.</span></p>
                    <p><span>Очный конкурс проходит в 2 этапа. Первый день в виде собеседования со всеми участниками по трем возрастным группам. Во второй день участвуют прошедшие отбор на первом этапе, как правило, это половина участников первого этапа, наиболее эрудированные в области геологии школьники. В оба этапа также включаются письменные задания.</span></p>
                    <p><span>В результате собеседования членов жюри с участниками второго этапа выявляются победители СГО. По всем трем возрастным группам победители награждаются дипломами первой, второй и третьей степени, памятными подарками.</span></p>
                    <p><span></span></p>
                    <p><span></span></p>
                    <div className="files_block">
                        <div className="zip_link">
                            <img className='docImg' src={docImg} alt="" />
                            <span><a href={Zip}>Примеры письменных заданий очного конкурса</a></span>
                        </div>
                        <div className="zip_link">
                            <img className='docImg' src={docImg} alt="" />
                            <span><a href={Zip}>Примеры устных вопросов очного конкурса</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FullTimeDocuments;