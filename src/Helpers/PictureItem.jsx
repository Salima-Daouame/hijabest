import { useState } from 'react';
import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';

function PictureItem({ image, title }) { // props : parent to child

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
        <div className=" mb-6 relative hover:opacity-75  cursor-pointer " onClick={handleDownload}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}>
            <img
                src={image}
                alt={title}
                className="rounded-3xl"
            />
            {isHover && (
                <div className="absolute top-1/2 left-1/2 
        transform -translate-x-1/2 -translate-y-1/2 ">
                    <ion-icon
                        name="download-outline"
                        style={{
                            fontSize: '1.8rem',
                            color: '#000',
                            padding: '0.5rem',
                            backgroundColor: '#fff',
                            borderRadius: '50%',
                            border: '2px solid #fff',
                        }}
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




