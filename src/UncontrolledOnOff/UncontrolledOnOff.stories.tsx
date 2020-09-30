import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";




export default {
    title: 'Uncontrolled On Off',
    component: UncontrolledOnOff,
};

const callback = action("accordion mode change event fired");

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback} />
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback} />

