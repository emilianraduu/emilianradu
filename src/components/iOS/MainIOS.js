import React, {PureComponent} from "react";
import Carousel from '@brainhubeu/react-carousel';

export class MainIOS extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            background: require('./iosWallpapers/Light-A-1.jpg')
        }
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        const {background} = this.state
        return (
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                display: 'flex',
                padding: 20,
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: 1,
                boxSizing: 'border-box',
                height: '100vh'
            }}>
                <Carousel>
                    <div
                        style={{flex: 1, display: 'flex', justifyContent: 'flex-start', padding: 20, flexWrap: 'wrap'}}>
                        <img src={require('../../assets/apple-music.jpg')}
                             style={{height: 80, width: 80, borderRadius: 18, alignSelf: 'flex-start'}}/>
                        <img src={require('../../assets/apple-music.jpg')}
                             style={{height: 80, width: 80, borderRadius: 18, alignSelf: 'flex-start'}}/>
                        <img src={require('../../assets/apple-music.jpg')}
                             style={{height: 80, width: 80, borderRadius: 18, alignSelf: 'flex-start'}}/>
                        <img src={require('../../assets/apple-music.jpg')}
                             style={{height: 80, width: 80, borderRadius: 18, alignSelf: 'flex-start'}}/>
                        <img src={require('../../assets/apple-music.jpg')}
                             style={{height: 80, width: 80, borderRadius: 18, alignSelf: 'flex-start'}}/>
                        <img src={require('../../assets/apple-music.jpg')}
                             style={{height: 80, width: 80, borderRadius: 18, alignSelf: 'flex-start'}}/>
                        <img src={require('../../assets/apple-music.jpg')}
                             style={{height: 80, width: 80, borderRadius: 18, alignSelf: 'flex-start'}}/>
                        <img src={require('../../assets/apple-music.jpg')}
                             style={{height: 80, width: 80, borderRadius: 18, alignSelf: 'flex-start'}}/>

                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', margin: 20}}>
                        <div style={{width: 10, height: 10, borderRadius: 10, background: '#fff', margin: 5}}/>
                        <div style={{width: 10, height: 10, borderRadius: 10, background: '#eee', margin: 5}}/>
                        <div style={{width: 10, height: 10, borderRadius: 10, background: '#eee', margin: 5}}/>
                    </div>
                    <div style={{
                        alignSelf: 'flex-end',
                        background: 'rgba(255, 255, 255, 0.5)',
                        width: '100%',
                        padding: 20,
                        boxSizing: 'border-box',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 30,
                        overflow: 'hidden',
                        justifyContent: 'space-between',
                        display: 'flex'
                    }}>
                        <img src={require('../../assets/apple-music.jpg')}
                             style={{height: 80, width: 80, borderRadius: 18}}/>
                        <img src={require('../../assets/apple-music.jpg')}
                             style={{height: 80, width: 80, borderRadius: 18}}/>
                        <img src={require('../../assets/apple-music.jpg')}
                             style={{height: 80, width: 80, borderRadius: 18}}/>
                        <img src={require('../../assets/apple-music.jpg')}
                             style={{height: 80, width: 80, borderRadius: 18}}/>
                    </div>
                </Carousel>
            </div>
        );
    }
}
