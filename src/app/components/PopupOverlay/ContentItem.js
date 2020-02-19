import React from 'react';

export default function ContentItem({ children, title } = {}) {
    return <div className="popup-overlay__content-container">
        <div className="popup-overlay__content-title">
            {title}
        </div>
        <div className="popup-overlay__content-space">
            {children}
        </div>
    </div>
}
