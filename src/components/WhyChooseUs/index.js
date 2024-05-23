import './index.css'
import { TbBulb } from "react-icons/tb";
import { TiGroup } from "react-icons/ti";
import { BsCash } from "react-icons/bs";


const WhyChooseUs=()=>(
    <>
    <h1 className='why-choose-us-head'>Why Choose US?</h1>
    <div className='why-choose-us-container'>
        <div className='why-choose-us-label-container'>
            <TbBulb className='icon'/>
            <h1 className='why-choose-us-heading'>Expert Faculty</h1>
            <p className='why-choose-us-description'>Our expert faculty comprises seasoned professionals with extensive industry experience and academic excellence, dedicated to providing top-notch education and personalized guidance to foster your success in ACCA.</p>
        </div>
        <div className='why-choose-us-label-container'>
            <TiGroup className='icon'/>
            <h1 className='why-choose-us-heading'>Complete Success Package</h1>
            <p className='why-choose-us-description'>Our expert faculty comprises seasoned professionals with extensive industry experience and academic excellence, dedicated to providing top-notch education and personalized guidance to foster your success in ACCA.</p>
        </div>
        <div className='why-choose-us-label-container'>
            <BsCash className='icon'/>
            <h1 className='why-choose-us-heading'>Placements</h1>
            <p className='why-choose-us-description'>Our expert faculty comprises seasoned professionals with extensive industry experience and academic excellence, dedicated to providing top-notch education and personalized guidance to foster your success in ACCA.</p>
        </div>
    </div>
    <div className='why-choose-us-lower-container'>
        <div className='why-choose-us-features'>
            <h1>Levels</h1>
            <p>Three (13 Papers)</p>
        </div>
        <div className='why-choose-us-features'>
            <h1>Duration</h1>
            <p>6 30 onwards</p>
        </div>
        <div className='why-choose-us-features'>
            <h1>Exams</h1>
            <p>Quarterly(Online)</p>
        </div>
        <div className='why-choose-us-features'>
            <h1>Exemptions</h1>
            <p>Upto 9 papers</p>
        </div>
    </div>
    </>
)

export default WhyChooseUs