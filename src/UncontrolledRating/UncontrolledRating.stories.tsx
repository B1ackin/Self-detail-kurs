import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {UncontrolledRating, RatingValueType} from "./UncontrolledRating";



export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
};

const callback = action("rating changed inside component")

export const EmptyRating = () => <UncontrolledRating value={0} defaultValue={0} onChange={callback}/> ;
export const Rating1 = () => <UncontrolledRating value={1} defaultValue={1} onChange={callback}/> ;
export const Rating2 = () => <UncontrolledRating value={2} defaultValue={2} onChange={callback}/> ;
export const Rating3 = () => <UncontrolledRating value={3} defaultValue={3} onChange={callback}/> ;
export const Rating4 = () => <UncontrolledRating value={4} defaultValue={4} onChange={callback}/> ;
export const Rating5 = () => <UncontrolledRating value={5} defaultValue={5} onChange={callback}/> ;
