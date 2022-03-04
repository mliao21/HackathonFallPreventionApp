/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ellie from './profile-ellie-fredricksen.jpg';


const PatientHeader = ({ }) => {

    return (
        <div class="container" css={css`background-color: white; margin-top: 30px; border-top-right-radius: 10px; border-bottom-right-radius: 10px;`}>
            <div class="columns">
                <div class="column is-2">
                    <img src={ellie} alt="Ellie Fredricksens" width="100" css={css`margin-left: 25px; margin-top: 7px;`} />
                </div>
                <div class="column">
                    <ul>
                        <li class="is-size-4">Name:</li>
                        <li class="is-size-4">DOB:</li>
                        <li class="is-size-4">PHN:</li>
                    </ul>
                </div>
                <div class="column">
                    <ul>
                        <li class="is-size-4">FROP score:</li>
                        <li class="is-size-4">Diagnosis:</li>
                    </ul>
                </div>
            </div>
        </div>

    );

}
export default PatientHeader;