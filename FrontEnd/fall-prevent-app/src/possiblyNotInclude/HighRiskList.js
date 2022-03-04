/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useState } from "react";
import { NavLink } from "react-router-dom";


const HighRiskList = ({ data }) => {

    return (
        <div class="table-container">
            <table className="table is-narrow is-striped is-fullwidth" css={css`margin-left: auto; margin-right: auto;`}>
                <tbody className="is-size-5">
                    {
                        data.map((item, index) => (
                            <tr key={index}>
                                <td>{data[index].author}</td>
                                <td>{data[index].country}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );

}
export default HighRiskList;