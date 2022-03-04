/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const MODAL_STYLES = {
    position: 'fixed',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

function PopUpModal({ open, children, onClose }) {
    if (!open) return null;

    return (
        <div style={OVERLAY_STYLES}>
            <div style={MODAL_STYLES}>
                <div class="navbar-end">
                    <button class="button is-danger" onClick={onClose} css={css`margin-bottom: 10px;`}>
                        <FontAwesomeIcon icon={faClose} size="2x" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    )

}

export default PopUpModal;