import React, {PureComponent} from 'react'
import {Avatar, HeaderWrapper, PageTitle} from "./headerStyle";
export class Header extends PureComponent {
    render() {
        return(
            <HeaderWrapper>
                <Avatar />
            <PageTitle>Hello, Emilian Radu</PageTitle>
            </HeaderWrapper>
        )
    }
}