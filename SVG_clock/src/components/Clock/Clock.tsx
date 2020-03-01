import React from "react";
import { ClockPath } from "./ClockPath/ClockPath"

export interface ClockProps {
    fullDayFormat: boolean;
    drawBackground: boolean;
    drawNumbers: boolean;
    drawMinuteMarkings: boolean;
    draw5MinuteMarkings: boolean;
    drawMinuteHand: boolean;
    drawHourHand: boolean;
    drawsecondHand: boolean;
    drawMinutepath: boolean;
    drawHourpath: boolean;
    drawsecondpath: boolean;
    radius: number;
}
export class Clock extends React.Component<ClockProps>{
    state: { date: Date, intervalId: any };
    constructor(props: ClockProps) {
        super(props);
        this.state = {
            date: new Date(),
            intervalId: null,
        }
    }
    getSmallerScreenDimension = () => {
        let w = window.innerWidth;
        let h = window.innerHeight;
        return w < h ? w : h;
    }
    updateSize = () => {
        this.setState({
            size: this.getSmallerScreenDimension()
        })
    }
    componentDidMount() {
        this.setState({
            intervalId: setInterval(() => {
                this.setState({
                    date: new Date()
                });
            }, 1000)
        })
    }
    componentWillUnmount() {
        if (this.state.intervalId != null) {
            clearInterval(this.state.intervalId)
        }
    }
    getHourPaths = () => {
        if (this.props.drawHourpath) {
            if (this.props.fullDayFormat) {
                return [
                    (<ClockPath
                        key="pm path"
                        value={this.state.date.getHours() > 12 ? this.state.date.getHours() % 12 : 0}
                        maxValue={12}
                        position={{ x: this.props.radius, y: this.props.radius }}
                        radius={this.props.radius * 0.7}
                        strokeColor="#ff0000"
                        strokeWidth={this.props.radius * 0.09}
                        tickInterval={1000 * 60 * 60} />),
                    (<ClockPath
                        key="am path"
                        value={this.state.date.getHours() % 24}
                        maxValue={12}
                        position={{ x: this.props.radius, y: this.props.radius }}
                        radius={this.props.radius * 0.7}
                        strokeColor="#ff0000"
                        strokeWidth={(this.props.radius * 0.09) / 2}
                        tickInterval={1000 * 60 * 60} />)
                ]
            }
            return (
                <ClockPath
                    value={this.state.date.getHours() % 12}
                    maxValue={12}
                    position={{ x: this.props.radius, y: this.props.radius }}
                    radius={this.props.radius * 0.7}
                    strokeColor="#ff0000"
                    strokeWidth={this.props.radius * 0.09}
                    tickInterval={1000 * 60 * 60} />
            )
        }
        return null;
    }
    getArms = () =>{
        let result:JSX.Element[] = [];
        if(this.props.drawHourHand){
            result.push((<line
                key={0}
                x1={this.props.radius}
                y1={this.props.radius}
                x2={this.props.radius + ((this.props.radius * 0.7) + (this.props.radius * 0.09) / 2) * Math.cos(-Math.PI / 2)}
                y2={this.props.radius + ((this.props.radius * 0.7) + (this.props.radius * 0.09) / 2) * Math.sin(-Math.PI / 2)}
                stroke="#f00"
                strokeWidth={this.props.radius * 0.015}
                style={{ transition: "transform 0.5s linear", transform: "rotate(" + 30 * (this.state.date.getHours() % 12) + "deg)", transformOrigin: "50% 50%" }}
            />))
        }
        if(this.props.drawMinuteHand){
            result.push((<line
                key={1}
                x1={this.props.radius}
                y1={this.props.radius}
                x2={this.props.radius + ((this.props.radius * 0.8) + (this.props.radius * 0.09) / 2) * Math.cos(-Math.PI / 2)}
                y2={this.props.radius + ((this.props.radius * 0.8) + (this.props.radius * 0.09) / 2) * Math.sin(-Math.PI / 2)}
                stroke="#0f0"
                strokeWidth={this.props.radius * 0.01}
                style={{ transition: "transform 0.5s linear", transform: "rotate(" + 6 * (this.state.date.getMinutes() % 60) + "deg)", transformOrigin: "50% 50%" }}
            />))
        }
        if(this.props.drawsecondHand){
            result.push((<line
                key={2}
                x1={this.props.radius}
                y1={this.props.radius}
                x2={this.props.radius + ((this.props.radius * 0.9) + (this.props.radius * 0.09) / 2) * Math.cos(-Math.PI / 2)}
                y2={this.props.radius + ((this.props.radius * 0.9) + (this.props.radius * 0.09) / 2) * Math.sin(-Math.PI / 2)}
                stroke="#00f"
                strokeWidth={this.props.radius * 0.005}
                style={{ transition: "transform 0.5s linear", transform: "rotate(" + 6 * (this.state.date.getSeconds() % 60) + "deg)", transformOrigin: "50% 50%" }}
            />))
        }
        return result;
    }
    render() {
        return (
            <svg width={this.props.radius * 2}
                height={this.props.radius * 2}>
                {
                    this.props.drawBackground ? (
                        <circle
                            cx={this.props.radius}
                            cy={this.props.radius}
                            r={this.props.radius * 0.99}
                            stroke="#000"
                            strokeWidth={this.props.radius * 0.01}
                            fill="#a0a0a0"
                            id="bg"
                        />
                    ) : null
                }
                {
                    this.props.drawsecondpath ? (
                        <ClockPath value={this.state.date.getSeconds()} maxValue={60} position={{ x: this.props.radius, y: this.props.radius }} radius={this.props.radius * 0.9} strokeColor="#0000ff" strokeWidth={this.props.radius * 0.09} tickInterval={1000} />
                    ) : null
                }
                {
                    this.props.drawMinutepath ? (
                        <ClockPath value={this.state.date.getMinutes()} maxValue={60} position={{ x: this.props.radius, y: this.props.radius }} radius={this.props.radius * 0.8} strokeColor="#00ff00" strokeWidth={this.props.radius * 0.09} tickInterval={1000 * 60} />
                    ) : null
                }
                {
                    this.getHourPaths()
                }
                {
                    [...Array(60)].map((segment, index, arr) => {
                        if (index % 5 === 0) {
                            if (!this.props.draw5MinuteMarkings) {
                                return null;
                            }
                        } else {
                            if (!this.props.drawMinuteMarkings) {
                                return null;
                            }
                        }
                        return (
                            <line
                                key={"line" + index}
                                x1={this.props.radius + (this.props.radius * 0.55) * Math.cos(((Math.PI * 2) / arr.length) * index)}
                                y1={this.props.radius + (this.props.radius * 0.55) * Math.sin(((Math.PI * 2) / arr.length) * index)}
                                x2={this.props.radius + (index % 5 === 0 ? this.props.radius * 0.99 : ((this.props.radius * 0.9) + (this.props.radius * 0.09) / 2)) * Math.cos(((Math.PI * 2) / arr.length) * index)}
                                y2={this.props.radius + (index % 5 === 0 ? this.props.radius * 0.99 : ((this.props.radius * 0.9) + (this.props.radius * 0.09) / 2)) * Math.sin(((Math.PI * 2) / arr.length) * index)}
                                stroke="#000"
                                strokeWidth={index % 5 === 0 ? this.props.radius * 0.015 : this.props.radius * 0.005}
                            />
                        )
                    })
                }
                {
                    this.getArms()
                }
                {
                    [...Array(12)].map((segment, index, arr) => {
                        if (this.props.drawNumbers) {
                            return (
                                <text
                                    key={"number" + index}
                                    x={this.props.radius + (this.props.radius * 0.5) * Math.cos(((Math.PI * 2) / arr.length) * index - (Math.PI / 3))}
                                    y={this.props.radius + (this.props.radius * 0.5) * Math.sin(((Math.PI * 2) / arr.length) * index - (Math.PI / 3))}
                                    textAnchor="middle"
                                    alignmentBaseline="middle"
                                    fontSize={this.props.radius * 0.075}
                                >
                                    {index + 1}
                                </text>
                            )
                        }
                        return null;
                    })
                }
            </svg>
        )
    }
}