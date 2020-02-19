import ReactDOM from 'react-dom';
import React from 'react';
import PopoverOverlay from './components/PopupOverlay';
import ContentItem from './components/PopupOverlay/ContentItem';

function RenderPopover() {
    return <PopoverOverlay title="Welcome to your Adaptive Practice Assessment">
        <ContentItem title="Why should I take this kind of assessment 1 ?">
            <p/>The Adaptive Practice Assessment is meant to provide you with a gauge of your ability level on a short set of material that you’ve studied.
            <p/>Allowing the assessment to gauge how much you’ve retained after studying a set of material will help you to identify where you might need to focus more and other areas where review is necessary, but maybe not your top priority. 
            <p/>As you go through your test prep journey with us you’ll experience the adaptive practice assessment along side the lesson and post assessment. The adaptive practice adds another assessment designed to cement what you’ve studied into your long-term memory.
        </ContentItem>
        
        <ContentItem title="Why should I take this kind of assessment 2 ?">
            <p/>The Adaptive Practice Assessment is meant to provide you with a gauge of your ability level on a short set of material that you’ve studied.
            <p/>Allowing the assessment to gauge how much you’ve retained after studying a set of material will help you to identify where you might need to focus more and other areas where review is necessary, but maybe not your top priority. 
        </ContentItem>
        
        <ContentItem title="Why should I take this kind of assessment 3 ?">
            <p/>The Adaptive Practice Assessment is meant to provide you with a gauge of your ability level on a short set of material that you’ve studied.
        </ContentItem>
    </PopoverOverlay>
}

ReactDOM.render(<RenderPopover />, document.getElementById('root'));