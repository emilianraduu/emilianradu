import React, {PureComponent} from 'react'
import {Header} from "./header/Header";

export class Main extends PureComponent {
    state = {
        isShowingMusic: false
    }

    render() {
        const {isShowingMusic} = this.state
        return (
            <div>

                <Header/>
                {/*</Parallax>*/}
                <div onClick={() => this.setState({isShowingMusic: !isShowingMusic})}>show apple music</div>

                <iframe allow="autoplay *; encrypted-media *;" frameBorder="0" height="450"
                        style={{
                            width: '100%',
                            transition: '0.5s ease',
                            maxHeight: isShowingMusic ? '1000px' : '0px',
                            maxWidth: '660px',
                            overflow: 'hidden',
                            background: 'transparent'
                        }}
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                        src="https://embed.music.apple.com/ro/playlist/fav-albums/pl.u-11zBBdaTK92YPL5"/>
            </div>
        )
    }
}