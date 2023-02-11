import { link } from "@wordpress/icons"
import {ToolbarGroup, ToolbarButton, Popover, Button } from "@wordpress/components"
import { RichText, InspectorControls, BlockControls, __experimentalLinkControl as LinkControl} from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import { useState } from "@wordpress/element"

wp.blocks.registerBlockType("cafeblocktheme/mainbutton", {
    title: "Main Button",
    category: "design",
    attributes: {
        text: {type: "string"},
        size: {type: "string", default: "large"},
        linkObject: {type: "object", default: {url: ""}},
        colorName: {type: "string", default: "blue"}
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props) {
    const [isLinkPickerVisible, setIsLinkPinkerVisible] = useState(false)

    function handleTextChange(x) {
        props.setAttributes({text: x})
    }

    function buttonHandler() {
        setIsLinkPinkerVisible(prev => !prev)
    }
    function handleLinkChange(newLink) {
        props.setAttributes({linkObject: newLink})
    }

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton onClick={buttonHandler} icon={link} />
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarButton isPressed={props.attributes.size === "large"} onClick={() => props.setAttributes({size: "large"})}>Large</ToolbarButton>
                    <ToolbarButton isPressed={props.attributes.size === "medium"} onClick={() => props.setAttributes({size: "medium"})}>Medium</ToolbarButton>
                    <ToolbarButton isPressed={props.attributes.size === "small"} onClick={() => props.setAttributes({size: "small"})}>Small</ToolbarButton>
                </ToolbarGroup>
            </BlockControls>
            <RichText allowedFormats={[]} tagName="a" className={`btn btn--${props.attributes.size}`} value={props.attributes.text} onChange={handleTextChange} />
            {isLinkPickerVisible && (
                <Popover position="middle center" onFocusOutside={() => setIsLinkPinkerVisible(false)}>
                    <LinkControl settings ={[]} value={props.attributes.linkObject} onChange={handleLinkChange}/>
                    <Button variant="primary" onClick={() => setIsLinkPinkerVisible(false)} style={{display: "block", width: "100%"}}>Confirm Link</Button>
                </Popover>
            )}
        </>
    )
}

function SaveComponent(props) {
    return <a href={props.attributes.linkObject.url} className={`btn btn--${props.attributes.size}`} value={props.attributes.text}>{props.attributes.text}</a>
}
