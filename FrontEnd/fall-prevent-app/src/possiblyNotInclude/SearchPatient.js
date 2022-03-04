/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./SearchPatient.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';

function SearchPatient({ data }) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
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

    return (
        <div className="search">
            <div class="navbar-end">
                <button css={css`margin-right: 140px; margin-top: 80px;`}>
                    <FontAwesomeIcon icon={faClose} size="2x"/>
                </button>
            </div>
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder="Enter book here..."
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
            {filteredData.length != 0 && (
                <div className="dataResult">
                    {filteredData.map((value, key) => {
                        return (
                            <a className="dataItem" href={value.link} target="_blank">
                                <p>{value.title} </p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchPatient;