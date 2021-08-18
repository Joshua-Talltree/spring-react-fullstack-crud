import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveTutorials, findTutorialsByTitle, deleteAllTutorial } from "../actions/tutorials";

class TutorialsList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.refreshData = this.refreshData.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.findByTitle = this.findByTitle.bind(this);
        this.removeAllTutorials = this.removeAllTutorials.bind(this);

        this.state = {
            currentTutorial: null,
            currentIndex: -1,
            searchTitle: "",
        };
    }

    refreshData() {
        this.setState({
            currentTutorial: null,
            currentIndex: -1,
        });
    }

    setActiveTutorial(tutorial, index) {
        this.setState({
           currentTutorial: tutorial,
           currentIndex: index,
        });
    }

    removeAllTutorials() {
        this.props
            .deleteAllTutorials()
            .then((response) => {
                console.log(response);
                this.refreshData();
            })
            .catch((e) => {
                console.log(e);
            });
    }

    findByTitle() {
        this.refreshData();

        this.props.findTutorialsByTitle(this.state.searchTitle);
    }

    render() {
        const { searchTitle, currentTutorial, currentIndex } = this.state;
        const { tutorials } = this.props;

        return (

        );
    }
}

const mapStateToProps = (state) => {
    return {
        tutorials: state.tutorials,
    };
};

export default connect(mapStateToProps, { retrieveTutorials, findTutorialsByTitle, deleteAllTutorials})(TutorialsList);