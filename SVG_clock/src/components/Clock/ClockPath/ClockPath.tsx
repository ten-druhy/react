import React from "react";

export interface ClockPathProps {
    radius: number;
    strokeWidth: number;
    strokeColor: string;
    tickInterval: number;
    position: { x: number, y: number };
    maxValue: number;
    value: number;
}
export class ClockPath extends React.Component<ClockPathProps>{
    getValue(){
        return this.props.value / this.props.maxValue;
        //return (((this.props.value.getTime() - (this.props.value.getTime()%1000)) / this.props.tickInterval) % this.props.maxValue) / this.props.maxValue;
    }
    render() {
        return (
            <circle
                cx={this.props.position.x}
                cy={this.props.position.y}
                r={this.props.radius}
                stroke={this.props.strokeColor}
                strokeWidth={this.props.strokeWidth}
                //strokeLinecap="round"
                fill="none"
                strokeDasharray={Math.PI * 2 * this.props.radius}
                strokeDashoffset={Math.PI * 2 * this.props.radius * (1-this.getValue())}
                style={{
                    transition:"stroke-dashoffset 0.5s linear",
                    transform:"translate(0%,100%) rotate(-90deg)"
                }}
            />
        )
    }
}