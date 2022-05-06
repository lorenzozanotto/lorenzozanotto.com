interface Props {
    title: string
    link?: string
}

function MenuItem(props: Props) {
    let cursorType: string = props.link ? "cursor-pointer" : "pointer-events-none"

    return (
        <p className={cursorType + " inline-block px-[12px] py-[8px] text-[14px] hover:text-white hover:bg-dark-gray"}>{props.title}</p>
    );
}

export default MenuItem;