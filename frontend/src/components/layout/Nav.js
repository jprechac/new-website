import React, { Component } from 'react';

export class Nav extends Component {
    render() {
        const navStyle = {
            marginBottom: '5px'
        }
        return (
            // <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={navStyle}>
            //     <div className="container">
            //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            //             <span className="navbar-toggler-icon"></span>
            //         </button>
            //         <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            //             <a className="navbar-brand" href="/">Jordan Prechac</a>

            //             <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            //                 {/* extra stuff */}
            //                 <li className="nav-item">
            //                     <a className='nav-link' title="Resume" href='/resume'>Resume</a>
            //                 </li>
            //                 {/* <li className="nav-item">
            //                     <a className="nav-link" href="https://www.linkedin.com/in/jordanprechac/" title="LinkedIn" target="_blank">LinkedIn</a>
            //                 </li> */}
            //             </ul>
            //         </div>
            //     </div>
            // </nav>

            // After Bootstrap Remake
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">Clarence Taylor</span>
                    <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="" /></span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;
