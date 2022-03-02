/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import elders from './ellie-n-carl.jpg';

const MainPage = () => {
    return (
        <body css={css`background-color: #A7C7E7; min-height: 100vh`}>
            <nav class="navbar" css={css`background-color: #A7C7E7`}>
                <div class="navbar-brand">
                    <a class="navbar-start ml-3" css={css`margin-left: 40px; margin-top: 25px;`}>
                        <FontAwesomeIcon icon={faHeartbeat} size="3x" color="#bb0a1e"/>
                        <span css={css`
                            font-family: Century Gothic;
                            font-size: 45px; 
                            color: #bb0a1e;
                            margin-left: 10px;
                            font-weight: bold;`}>Company Name</span>
                    </a>
                </div>
            </nav>
            <section class="section mt-4" >
                <div class="container">
                    <div class="tile is-ancestor">
                        <div class="tile is-parent">
                            <img src={elders} alt="Cute Elder Couples" width="430" 
                            css={css`margin-left: 95px; margin-top: 10px; box-shadow: 20px 20px 50px grey; border-radius: 1%;`}/>
                        </div>
                        <div class="tile is-parent">
                            <div class="tile is-child is-10">
                                <NavLink className="nav-link" to="/patient_search">
                                    <button class="button is-rounded is-large is-fullwidth mt-6 ml-5">Patient Search</button>
                                </NavLink>
                                <NavLink className="nav-link" to="/new_patient">
                                    <button class="button is-rounded is-large is-fullwidth mt-6 ml-5">Add New Patient</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    );
}

export default MainPage;