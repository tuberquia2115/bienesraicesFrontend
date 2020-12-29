import React from 'react';
import PropTypes from 'prop-types'

const PropiedadPreview = ({ propiedad }) => {
    const {nombre} = propiedad;
    return (
        <h3>
            {nombre}
        </h3>
    );
}

PropiedadPreview.propTypes = {
    propiedad: PropTypes.object
}
export default PropiedadPreview;