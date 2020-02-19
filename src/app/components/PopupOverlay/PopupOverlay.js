import React from 'react';

import './css/PopupOverlay.scss';

class PopupOverlay extends React.PureComponent {

    state = {
        currentStep: 0
    }

    renderStepDot = (index, currentStep) => {
        const isActive = index === currentStep;
        return <div
            onClick={() => this.goToStep(index)}
            key={index}
            className={`popup-overlay__step-dot ${isActive ? 'popup-overlay__steps-dot__active' : ''}`}
        />
    }

    renderSteps = (stepsCount, currentStep) => {
        return <div className="popup-overlay__steps">
            {new Array(stepsCount).fill().map((empty, index) => this.renderStepDot(index, currentStep))}
        </div>
    }

    renderCloseBtn = (onClick) => {
        return <span
            className="popup-overlay__close-btn"
            onCLick={onClick}>
            ×
            </span>;
    }

    renderLeftNavigationArrow = (currentStep, onCLick) => {
        return currentStep > 0 ? <span
                className="popup-overlay__nav-arrow-left"
                onClick={onCLick}
            /> : null;
    }

    renderProgressIndicator = (stepsCount, currentStep) => {
        return <span className="popup-overlay__progress-indicator">
            {`${currentStep + 1}/${stepsCount}`}
        </span>;
    }

    renderRightNavigationArrow = (stepsCount, currentStep, onCLick) => {
        return currentStep < stepsCount - 1 ? <span
            className="popup-overlay__nav-arrow-right"
            onClick={onCLick}
        /> : null
    }

    goPrevious = () => {
        this.setState({currentStep: this.state.currentStep - 1})
    }

    goNext = () => {
        this.setState({currentStep: this.state.currentStep + 1})
    }

    goToStep = (step) => {
        this.setState({currentStep: step});
    }

    render() {
        const { children = [], onClose, title } = this.props;
        const stepsCount = children.length;
        const { currentStep } = this.state;
        return <div className="popup-overlay__container">
            <div className="popup-overlay__left-bar">
                {this.renderCloseBtn(onClose)}
                {this.renderLeftNavigationArrow(currentStep, this.goPrevious)}
            </div>
            <div className="popup-overlay__workspace">
                <div className="popup-overlay__top-bar">
                    {title}
                </div>
                <div className="popup-overlay__content">
                    {children[currentStep]}
                </div>
                <div className="popup-overlay__bottom-bar">
                    {this.renderSteps(stepsCount, currentStep)}
                </div>
            </div>
            <div className="popup-overlay__right-bar">
                {this.renderProgressIndicator(stepsCount, currentStep)}
                {this.renderRightNavigationArrow(stepsCount, currentStep, this.goNext)}
            </div>
        </div>
    }
}

export default PopupOverlay;