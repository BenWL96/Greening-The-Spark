import '../css/components/header.css';
import Logo from '../images/gts_logo.png';
function Header() {
    return (
        <div>
            <section className='section section_header' data-testid="section_header">
                <img className="section_header_logo" href="https://www.cornucopia.co.uk/gts/" target="_blank" data-testid="section_header_logo" src={Logo} />
            </section>
            </div>
    )
}

export default Header;
