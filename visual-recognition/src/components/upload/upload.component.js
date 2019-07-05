import React from 'react';
import axios from 'axios';

export default class Upload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            file: null
        };

        this.onChange = this.onChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ file: event.target.files[0] });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.encodeImageFileAsURL(this.state.file);
    }

    encodeImageFileAsURL(file) {
        var reader = new FileReader();
        reader.onloadend = () => {
            if (reader.result)
                this.upload(reader.result);
        }
        reader.readAsDataURL(file);
    }

    upload(file) {
        axios.post("https://localhost:44341/api/Image/upload", JSON.stringify(file), { headers: { 'Content-Type': 'application/json' } })
            .then((response) => {
                console.log(`Upload realizado com sucesos`);
            })
            .catch((error) => {
                console.log(`Erro ao realizar o upload`);
            });
    }

    render() {
        return (
            <form id="form" onSubmit={this.onFormSubmit}>
                <input type="file" onChange={this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}
