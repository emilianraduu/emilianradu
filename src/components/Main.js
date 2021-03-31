import React, {PureComponent} from 'react'
import {isIOS, isAndroid, isWindows, isMacOs,  deviceType} from 'react-device-detect'
import {MainIOS} from "./iOS/MainIOS";

export class Main extends PureComponent {
    state = {
        isShowingMusic: false
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {
                    isIOS && deviceType === 'tablet' && <></>
                }
                {
                    isIOS && deviceType === 'mobile' && <MainIOS/>
                }
                {
                    isAndroid && <></>
                }
                {
                    isWindows && <></>
                }
                {
                    isMacOs && <></>
                }
            </div>
        )
    }
}
