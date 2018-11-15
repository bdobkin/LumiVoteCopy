'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import CandidatesMenu from './CandidatesMenu';
import Issue from './Issue';
import candidates from '../data/candidates';

export default class CandidatePage extends React.Component {
    render() {
        const id = this.props.params.id;
        const candidate = candidates.filter((candidate) => candidate.id === id)[0];
        if (!candidate) {
            return <NotFoundPage/>;
        }   
        const headerStyle = { backgroundImage: `url(/img/${candidate.cover})` };
        return (
            <div className="candidate-full">
                <CandidatesMenu candidates={candidates}/>
                <div className="candidate">
                    <header style={headerStyle}/>
                    <div className="picture-container">
                        <img src={`/img/${candidate.image}`}/>
                        <h2 className="name">{candidate.name}</h2>
                </div>
                <section className="issues">
                    <p>The candidate has the following to say about these important issues: </p>
                        <u1>{
                            candidate.issues.map((issue, i) => <Issue key={i} {...issue}/>)
                        }</u1>
                 </section>
            </div>
            <div className="navigateBack">
              <Link to="/">« Back to the index</Link>
            </div>
          </div>
        );
    }
}