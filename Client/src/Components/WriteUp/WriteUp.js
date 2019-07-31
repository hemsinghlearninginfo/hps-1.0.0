import React from 'react';
import { PageTemplate, Loading } from '../../_controls/index';
import { ListWriteUp, AddWriteUp } from './';
import { Icon } from '../../_controls';

export const WriteUp = () => (
    <PageTemplate heading="Write Ups">
        <div className="row">
            <div className="col-lg-12 text-center">
                <AddWriteUp />
            </div>
        </div>
        <div className="row pt-1">
            <div className="col-lg-12">
                <ListWriteUp />
            </div>
        </div>
    </PageTemplate>
);
