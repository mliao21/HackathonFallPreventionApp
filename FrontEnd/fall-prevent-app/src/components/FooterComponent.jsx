/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {   
        }
    }

    render() {
        return (
            <div>
                <footer className="footer" css={css`background-color: #bb0a1e; position:absolute; left:0; bottom:0; right:0;`}>
                    <span className="text-white" >University of Calgary copyright@2022 </span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
