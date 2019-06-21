import React from 'react';
import PropTypes from 'prop-types';

export default class Upload extends React.Component{
    render(){
        return <input type="file" name="fileToUpload" id="fileToUpload" />
    }
}

Upload.propType = {

}