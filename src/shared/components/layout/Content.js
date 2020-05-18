import React from "react";
import PropTypes from 'prop-types';

const Content = (props) => {

    Content.propTypes = {
        children: PropTypes.element.isRequired
    };

    const { children } = props;

    return(
        <main>
            { children }
        </main>
    );
}

export default Content;