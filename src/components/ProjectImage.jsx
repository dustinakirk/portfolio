import React, { useState } from 'react';
import Lightbox from './Lightbox';

function ProjectImage({ src, alt, className = "", style = {} }) {
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <>
      <div className="project-image-container bg-white rounded-lg" style={{ maxWidth: '600px', width: '80%', margin: '20px auto 0px auto' }}>
        <img 
          src={src} 
          alt={alt}
          className={`cursor-pointer hover:opacity-90 transition-opacity ${className}`}
          style={{ width: '100%', objectFit: 'contain', ...style }}
          onClick={() => setShowLightbox(true)}
        />
      </div>
      
      {showLightbox && (
        <Lightbox 
          src={src} 
          alt={alt} 
          onClose={() => setShowLightbox(false)} 
        />
      )}
    </>
  );
}

export default ProjectImage;