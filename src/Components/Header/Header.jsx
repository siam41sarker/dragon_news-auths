import moment from 'moment';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
const Header = () =>{
  return (
    <div className="mt-[50px] flex flex-col justify-center items-center">
        <Link to={"/category/01"}><img className='w-[300px] h-[60px]' src={logo} alt="logo" /></Link>
        <h4 className='text-lg  text-[rgba(112,111,111,1)] mt-5'>Journalism Without Fear or Favour</h4>
        <p className='mt-[10px]  text-xl font-medium text-[rgba(64,63,63,1)]'>
           { moment().format('dddd, MMMM DD, YYYY')}
        </p>
    </div>
  )
}
export default Header;