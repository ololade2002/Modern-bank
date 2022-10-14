import './Stats.css';

const Stats = () => {

    return ( 
        <div className="stats"  data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="80"
        data-aos-delay="200">
            <div>
                <h2>3800+</h2>
                <h5>USER ACTIVE</h5>
            </div>
           <span>|</span>
            <div>
                 <h2>230+</h2>
                <h5>TRUSTED BY COMPANY</h5>
            </div>
            <span>|</span>
            <div>
                 <h2>$230M+</h2>
                <h5>TRANSACTION</h5>
            </div>
        </div>
     );
}
 
export default Stats;