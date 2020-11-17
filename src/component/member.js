import '../css/member.css';
import phop from '../image/phop.png';
import nun from '../image/nun.png';
import nutwat from '../image/nutwat.png';
import tle from '../image/Tle.png';
import ball from '../image/ball.png';
import tui from '../image/tui.png';
function Member() {
    return (
      <div className="Member">
          <div><p className="membertp" > MEMBER</p>
        <p className="memberthtp">- สมาชิก -</p></div>
        <div className="memberimg">
        <img src={phop} width='400px' className="phop m1"/>
        <img src={tle} width='400px'className="tle m2"/>
        <img src={nun} width='400px'className="nun m3"/>
        <img src={tui} width='400px'className="tui m4"/>
        <img src={nutwat} width='400px'className="nutwat m5"/>
        <img src={ball} width='450px'className="ball m6"/>
          </div>
          </div>
            );
}

export default Member;
