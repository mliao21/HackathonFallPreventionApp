/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const PatientSideBar = ({ }) => {

    return (
        <div>
            <NavLink className="nav-link" to="/" css={css`margin-left: 120px;`}>
                <button class="button is-medium is-link">Main Menu</button>
            </NavLink>
            <div class="container" >
                <div class="tile is-parent">
                    <div>
                        <div>
                            <button class="button is-rounded is-large is-fullwidth mt-4 mr-4">Recommendations</button>
                        </div>
                        <div>
                            <button class="button is-rounded is-large is-fullwidth mt-4 mr-4">Medications</button>
                        </div>
                        <div>
                            <button class="button is-rounded is-large is-fullwidth mt-4 mr-4">Fall Trend</button>
                        </div>
                        <div>
                            <button class="button is-rounded is-large is-fullwidth mt-4 mr-4">Add New Data</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default PatientSideBar;