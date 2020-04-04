import React, { Fragment } from 'react';
import Summary from './Summary';
import Progress from './Progress';
import StudentsList from './StudentsList';

export default function Overview() {
    return (
        <Fragment>
            <Summary />
            <Progress />
            <StudentsList />
        </Fragment>
    )
}
