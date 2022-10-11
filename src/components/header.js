import '../css/components/header.css';
import Logo from '../images/gts_logo.png';
function Header() {
    return (
        <div>
            <section className='section section_header' data-testid="section_header">
                    {/*<h1 className='section_header_title' data-testid="section_header_title">
                        Greening The Spark
    </h1>*/}
                <img className="section_header_logo" data-testid="section_header_logo" src={Logo} />
            </section>
            </div>
    )
}

export default Header;
