import React from 'react';
import axios from 'axios';

export default class ShowImage extends React.Component {
    constructor() {
        super();

        this.state = {
            images: [],
        };

        this.onInit();
    }

    onInit() {
        axios.get("https://localhost:44341/api/Image")
            .then((response) => {
                const result = response.data;
                this.setState({
                    images: result.map(image => { return image })
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {
                    this.state.images.map(image => {
                        return (
                            <img key={image.imageId} alt="" width="300" height="250" src={image.imagePath}></img>
                        )
                    })
                }
            </div>
        )
    }
}
