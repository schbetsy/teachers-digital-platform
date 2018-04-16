import React from "react";

import C from "../../constants";

export default class CriterionLinkWrapper extends React.Component {

    renderChildren() {
        return this.props.children
    }

    handleCriterionTitleClick(criterionKey) {
        this.props.setCriterionStatusToInProgress(criterionKey);
    }

    renderCriterionTitle() {
        if (this.props.criterionCompletionStatuses[this.props.criterionKey] !== C.STATUS_IN_START) {
            return (this.props.children);
        }
        else {
            return(
                <div>
                    <button className="a-btn" onClick={(e) => {this.handleCriterionTitleClick(this.props.criterionKey)}} >
                        {this.props.criterionText}
                    </button>
                    <br /><br />
                </div>
            );
        }
    }

    render() {
        return (
            this.renderCriterionTitle()
        );
    }
}
