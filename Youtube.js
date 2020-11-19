import React, { Component } from 'react';

const APP_KEY ='AIzaSyCNeVnNpHoLUg4gEIDWdsbSFgjvk6cJRJ8';
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=sex&type=video&key=${APP_KEY}`;

//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=sex&type=video&key=[YOUR_API_KEY]

class Youtube extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this);
    }

    clicked () {
        fetch(url)
        .then((response) => response.json())
        .then( (responseJson) => {
            //console.log(responseJson);
            const resultyt = responseJson.items.map(obj => 'https://www.youtube.com/embed/' + obj.id.videoId);
            this.setState({resultyt});
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() { 
        //console.log(url);
        console.log(this.state.resultyt);
        return ( 
            <div>
                <button onClick={this.clicked}>More xxx Videos</button>
                <div className='youtbue'>
                    
                    {
                            this.state.resultyt.map((link, i) => {
                            console.log(link);
                            var frame = <div key={i} > <iframe width="400" src={link} frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                            picture-in-picture" allowFullScreen></iframe></div>     
                            return frame;
                            })
                        }
                        {this.frame}
                </div>
            </div>
         );
    }
}
 
export default Youtube;