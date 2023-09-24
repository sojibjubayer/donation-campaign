import logo from '../../../assets/Logo.png'

const Logo = () => {
    return (
        <div className="text-2xl font-semibold">
            <img className='w-52' src={logo} alt="" />
        </div>
    );
};

export default Logo;