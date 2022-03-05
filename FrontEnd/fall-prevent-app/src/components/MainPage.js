/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faSearch, faClose, faBell } from '@fortawesome/free-solid-svg-icons';
import elders from '../images/ellie-n-carl.jpg';
import "./SearchPatient.css";
import PopUpModal from './PopUpModal';
import patientService from "../services/patient.service";

const MainPage = () => {

    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [isOpenRisk, setIsOpenRisk] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [patientList, setPatientList] = useState([]);
    const [highRiskList, setHighRiskList] = useState([]);  

    useEffect(() => {
        patientService.getAll()
            .then((response) => {
                console.log(response.data);
                setPatientList(response.data);
            })
            .catch((error) => console.log(error.data));
    }, [])

    useEffect(() => {
        patientService.getHighRisk()
            .then((response) => {
                console.log(response.data);
                setHighRiskList(response.data);
            })
            .catch((error) => console.log(error.data));
    }, [])

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = patientList.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    const closePopUpSearch = () => {
        setIsOpenSearch(false);
        setFilteredData([]);
        setWordEntered("");
    };

    const closePopUpRisk = () => {
        setIsOpenRisk(false);
    };

    return (
        <body css={css`background-color: #A7C7E7; min-height: 100vh`}>
            <nav class="navbar" css={css`background-color: #A7C7E7`}>
                <div class="navbar-brand">
                    <div class="navbar-start ml-3" css={css`margin-left: 40px; margin-top: 25px;`}>
                        <FontAwesomeIcon icon={faHeartbeat} size="3x" color="#bb0a1e" />
                        <span css={css`
                            font-family: Century Gothic;
                            font-size: 45px; 
                            color: #bb0a1e;
                            margin-left: 10px;
                            font-weight: bold;`}>Company Name</span>
                    </div>
                </div>
            </nav>
            <section class="section mt-4" >
                <div class="container">
                    <div class="tile is-ancestor">
                        <div class="tile is-parent">
                            <img src={elders} alt="Cute Elder Couples" width="480"
                                css={css`margin-left: 60px; margin-top: 10px; box-shadow: 20px 20px 50px grey; border-radius: 1%;`} />
                        </div>
                        <div class="tile is-parent">
                            <div class="tile is-child is-10">
                                <div>
                                    <button class="button is-rounded is-large is-fullwidth mt-1 ml-6"
                                        onClick={() => setIsOpenSearch(true)}>Patient Search</button>
                                    <PopUpModal open={isOpenSearch} onClose={closePopUpSearch}>
                                        <div>
                                            <div className="search">
                                                <div className="searchInputs">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter patient's name here..."
                                                        value={wordEntered}
                                                        onChange={handleFilter}
                                                    />
                                                    <div className="searchIcon">
                                                        {filteredData.length === 0 ? (
                                                            <FontAwesomeIcon icon={faSearch} />
                                                        ) : (
                                                            <FontAwesomeIcon id="clearBtn" icon={faClose} onClick={clearInput} />
                                                        )}
                                                    </div>
                                                </div>
                                                {filteredData.length !== 0 && (
                                                    <div className="dataResult">
                                                        {filteredData.map((value, key) => {
                                                            return (
                                                                <a className="dataItem" href={"/view-patient/"+value.patientid} >
                                                                    <p>{value.name}</p>
                                                                    <p>{value.phn}</p>
                                                                </a>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </PopUpModal>
                                </div>
                                <NavLink className="nav-link" to="/new_patient">
                                    <button class="button is-rounded is-large is-fullwidth mt-4 ml-6">Add New Patient</button>
                                </NavLink>
                                <div>
                                    {patientList.length === 0 ? (
                                        <button class="button is-rounded is-large is-fullwidth mt-4 ml-6" onClick={() => setIsOpenRisk(true)}>
                                            High-Risk Patients
                                        </button>
                                    ) : (
                                        <button class="button is-rounded is-large is-fullwidth mt-4 ml-6 is-danger" onClick={() => setIsOpenRisk(true)}>
                                            <span><FontAwesomeIcon icon={faBell} css={css`margin-right: 5px;`} /></span>
                                            High-Risk Patients
                                            <span><FontAwesomeIcon icon={faBell} css={css`margin-left: 5px;`} /></span>
                                        </button>
                                    )}
                                    <PopUpModal open={isOpenRisk} onClose={closePopUpRisk}>
                                        <div className="dataResult">
                                            {highRiskList.map((value, key) => {
                                                return (
                                                    <a className="dataItem" href={value.link}>
                                                        <p>{value.name}</p>
                                                        <p>{value.phn}</p>
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </PopUpModal>
                                </div>
                                <div>
                                    <button class="button is-rounded is-large is-fullwidth mt-4 ml-6">Resources</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    );
}

export default MainPage;