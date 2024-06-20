import React from 'react';
import LoremIpsum from '../../../assets/images/LoremIpsum.png';
import TechLogo from '../../../assets/images/TechLogo.png';
import NameLogo from '../../../assets/images/NameLogo.png';



export default function Parceiros() {
  return (
    <div className="container-fluid bg-light-orange rounded-4 mt-5 mb-5 shadow">
      <div className="row pt-4 ">
        <div className="col font-bold text-green text-start ps-5">
          <h2>Parceiros</h2>
        </div>
      </div>
      <div className=" pb-4">
        <div className='d-flex container align-items-center justify-content-center'>
          <div className=' img-fluid row '>
            <img src={NameLogo} alt="Logo do Parceiro" />
          </div>
          <div className=' img-fluid row '>
            <img src={TechLogo} alt="Logo do Parceiro" />
          </div>
          <div className=' img-fluid row'>
            <img src={LoremIpsum} alt="Logo do Parceiro" />
          </div>
        </div>
        
      </div>
    </div>
  );
}
