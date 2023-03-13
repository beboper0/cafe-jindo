import { RichText } from "@wordpress/block-editor"

wp.blocks.registerBlockType("cafeblocktheme/swipernavbutton", {
    title: "Swiper Nav Button",
    category: "design",
    parent: [ "cafeblocktheme/swipernav" ],
    supports: {
        align: ["full"]
    },
    icon: 'layout',
    attributes: {
        align: {type: "string", default: "full"},
        text: {type: "string"},
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props) {
    function handleTextChange(x) {
        props.setAttributes({text: x})
    }

    return (
        <>
            <RichText className="nav-item" allowedFormats={[]} tagName="div" onChange={handleTextChange} value={props.attributes.text}/>
        </>
    )
}

function SaveComponent(props) {
    return (
        <div className="nav-item" value={props.attributes.text}>{props.attributes.text}</div>
    )
}