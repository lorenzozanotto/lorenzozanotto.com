interface Props {
    title: string
    link?: string
}

function MenuItem(props: Props) {
    let cursorType: string = props.link ? "cursor-pointer" : "pointer-events-none"

    return (
        <p className={cursorType + " inline-block px-[12px] py-[6px] text-md hover:text-white hover:bg-dark-gray"}>{props.title}</p>
    );
}

export default MenuItem;