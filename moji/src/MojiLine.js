import React from 'react';

class MojiLine extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let blockLine = this.props.line
        let blockList = blockLine.map((block, index) => {
            let x = index % 2;
            let y = this.props.y % 2;
            let coord = [x, y];
            return (
                <span>
                    {
                        (() => {
                            if(x === 0 && y === 0)
                            {
                                return <button className="square" color="blue"> {block} </button>;
                            }
                            if(x === 0 && y === 1)
                            {
                                return <button className="square" color="red"> {block} </button>;
                            }
                            if(x === 1 && y === 0)
                            {
                                return <button className="square" color="green"> {block} </button>;
                            }
                            if(x === 1 && y === 1)
                            {
                                return <button className="square" color="yellow"> {block} </button>;
                            }
                    })()
                    }
                </span>
            )
        })

        return (
            <a className="panel-block">
                {blockList}
            </a>
        )
    }
}

export default MojiLine;