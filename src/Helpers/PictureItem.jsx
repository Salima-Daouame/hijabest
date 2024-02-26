import { useState } from 'react';
import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';

function PictureItem({ image, title }) { // props

    const [isHover, setIsHover] = useState(false)  //useState hook

    const handleHover = (e) => {
        setIsHover(e.type === 'mouseenter');
    };
    const handleDownload = () => {
            fetch(image)
              .then(response => response.blob())
              .then(blob => {
                saveAs(blob, title);
              })
              .catch(error => {
                console.error('Error downloading image:', error);
              });
    
    };

    return (

        <div className=" mb-6 relative cursor-pointer " onClick={handleDownload}>
            <img
                src={image}
                alt={title}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                className="rounded-3xl hover:opacity-75"
            />
            {isHover && (
                <div className="absolute top-1/2 left-1/2 
        transform -translate-x-1/2 -translate-y-1/2 ">
                    <ion-icon
                        name="download-outline"
                        style={{ fontSize: '2.5rem', color: '#fff'}}
                       
                    />
                </div>
            )}
        </div>

    );
}

PictureItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default PictureItem;
