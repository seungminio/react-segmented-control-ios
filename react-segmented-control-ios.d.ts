import * as React from 'react';

export interface IProps {
    segments: any[]
    selected?: number;
    variant?: string;
    onChangeSegment?: ((e)=>void) | void;
}

declare module 'react-segmented-control-ios' {
    export default class SegmentedControl extends React.Component<IProps> {  }
}
