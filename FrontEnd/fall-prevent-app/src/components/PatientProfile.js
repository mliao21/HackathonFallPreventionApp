/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import ellie from '../images/profile-ellie-fredricksen.jpg';
import PopUpModal from './PopUpModal';
import patientService from "../services/patient.service";


const PatientProfile = () => {

    const params = useParams();
    const [isOpenUpdate, setIsOpenUpdate] = useState(false);
    const [patientProfile, setPatientProfile] = useState([]);  
    
    const closePopUpUpdate = () => {
        setIsOpenUpdate(false);
    };

    useEffect(() => {
        patientService.get(params.id)
            .then((response) => {
                console.log(response.data);
                setPatientProfile(response.data);
            })
            .catch((error) => console.log(error.data));
    }, [])

    return (
        <div css={css`background-color: #A7C7E7; min-height: 102vh;`}>
            <div class="columns">
                <div class="column is-three-quarters">
                    <div class="container" css={css`margin-top: 30px; border-top-right-radius: 10px; border-bottom-right-radius: 10px;`}>
                        <div class="columns has-text-weight-medium is-size-4 has-text-black-bis">
                            <div class="column is-2">
                                <img src={ellie} alt="Ellie Fredricksens" width="140"
                                    css={css`
                                display:inline-block;
                                padding: 0.25em;
                                border-radius: 0.5em;
                                box-shadow: inset 0.2em 0.2em 0.2em 0 rgba(255,255,255,0.5), inset -0.2em -0.2em 0.2em 0 rgba(0,0,0,0.5);
                                margin-left: 50px; 
                                margin-top: 3px;`} />
                            </div>
                            <div class="column ml-6">
                                <ul>
                                    <li>Name: <span>{patientProfile.name}</span></li>
                                    <li>DOB: <span>{patientProfile.dob}</span></li>
                                    <li>PHN: <span>{patientProfile.phn}</span></li>
                                </ul>
                            </div>
                            <div class="column mr-6">
                                <ul>
                                    <li>FROP score: 6 (Jan 3, 2022)</li>
                                    <li>Diagnosis: <span>{patientProfile.diagnosis}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="container mt-5">
                        <div class="block ml-6">
                            <ol class="is-size-5 ml-5 has-text-black-bis">
                                <li>intervention...medication...</li>
                                <li>intervention...medication...</li>
                                <li>intervention...medication...</li>
                                <li>intervention...medication...</li>
                                <li>intervention...medication...</li>
                                <li>intervention...medication...</li>
                            </ol>
                        </div>
                    </div>
                    <div class="container" css={css`margin-left: 48px; margin-top: 40px;`}>
                        <article class="message">
                            <div class="message-header">
                                <p>Notes:</p>
                            </div>
                            <div class="message-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>,
                                tempus quis placerat ut, porta nec nulla.Nullam gravida purus diam, et dictum felis venenatis
                                efficitur. Aenean ac eleifend lacus, in mollis lectus.
                            </div>
                        </article>
                    </div>
                </div>
                <div class="hero">
                    <div class="hero-body">
                        <div>
                            <NavLink className="nav-link" to="/" css={css`margin-left: 200px;`}>
                                <button class="button is-medium">
                                    <FontAwesomeIcon icon={faHome} size="1x" />
                                </button>
                            </NavLink>
                            <div class="container" >
                                <div class="tile is-parent">
                                    <div>
                                        <div>
                                            <button class="button is-rounded is-large is-fullwidth mt-4 mr-4">Vital Signs</button>
                                        </div>
                                        <div>
                                            <button class="button is-rounded is-large is-fullwidth mt-4 mr-4">Recommendations</button>
                                        </div>
                                        <div>
                                            <button class="button is-rounded is-large is-fullwidth mt-4 mr-4">Medications</button>
                                        </div>
                                        <div>
                                            <button class="button is-rounded is-large is-fullwidth mt-4 mr-4">Trends</button>
                                        </div>
                                        <div>
                                            <button class="button is-rounded is-large is-fullwidth mt-4 mr-4" onClick={() => setIsOpenUpdate(true)}>
                                                Update/Add Data
                                            </button>
                                            <PopUpModal open={isOpenUpdate} onClose={closePopUpUpdate}>
                                                <div class="tile is-parent">
                                                    <div>
                                                        <div>
                                                            <button class="button is-rounded is-large is-fullwidth mt-4 mr-4">Vital Signs</button>
                                                        </div>
                                                        <div>
                                                            <button class="button is-rounded is-large is-fullwidth mt-4 mr-4">Recommendations</button>
                                                        </div>
                                                        <div>
                                                            <button class="button is-rounded is-large is-fullwidth mt-4 mr-4">Medications</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </PopUpModal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}
export default PatientProfile;