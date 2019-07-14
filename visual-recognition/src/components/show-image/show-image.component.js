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

    onClickImage(imagePath) {
        //encode - btoa
        //decode - atob
        //JSON.stringify

        imagePath = btoa(imagePath);
        imagePath = JSON.stringify(imagePath);

        axios.post("https://localhost:44341/api/Recognition/classify", imagePath, { headers: { 'Content-Type': 'application/json' } })
            .then((response) => {

            })
            .catch((error) => {

            })
    }

    render() {
        return (
            <div>
                {
                    this.state.images.map(image => {
                        return (
                            <div key={image.imageId} onClick={this.onClickImage.bind(this, image.imagePath)}>
                                <img alt="" width="300" height="250" src={image.imagePath}></img>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
