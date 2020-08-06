import React, { Component } from 'react';
import PropTypes from 'prop-types';

const wrapperStyle = {
    marginTop: '10px',
    marginBottom: '10px',
    paddingTop: '5px',
}
const paragraphStyle = {
    padding: '0px 15px',
}

class ExperienceDetail extends Component {

    render() {
        const { title, link, image, style, quote, description, ...props} = this.props;
        return (
            <div style={wrapperStyle}>
                <div className='row'>
                    <div className='col-md-auto'>
                        <img src={image.src} alt={image.alt} height={image.height || '200px'} width={image.width || '200px'} />
                    </div>
                    <div className='col-md'>
                        <h3>
                            <a style={style} href={link} target="_blank" title={title}>{title}</a>
                        </h3>
                        <p className="text-muted">
                            {quote}
                        </p>
                    </div>
                </div>
                <div>
                {/* <div style={paragraphStyle}> */}
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}

ExperienceDetail.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        height: PropTypes.string,
        width: PropTypes.string
    }),
    style: PropTypes.object,
    quote: PropTypes.any.isRequired,
    description: PropTypes.string.isRequired
}

export default ExperienceDetail;