import _ from "lodash"

interface Props {
    lines: number
}

function RetroStrokes(props: Props) {
    return (
        <div>
            {_.times(props.lines, () => {
                return(<div className="h-[1px] mb-[1px] shadow-retro-ui bg-white"/>)
            })}
        </div>
    );
}

export default RetroStrokes;