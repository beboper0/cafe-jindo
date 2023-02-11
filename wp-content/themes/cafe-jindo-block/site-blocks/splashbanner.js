import apiFetch from "@wordpress/api-fetch"
import { Button, PanelBody, PanelRow } from "@wordpress/components"
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import {useEffect} from "@wordpress/element"


wp.blocks.registerBlockType("cafeblocktheme/splashbanner", {
    title: "Splash Banner",
    category: "design",
    supports: {
        align: ["full"]
    },
    attributes: {
        align: {type: "string", default: "full"},
        imgID: {type: "number"},
        imgURL: {type: "string", default: splashbanner.fallbackimage}
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props) {
    useEffect(function() {
        if (props.attributes.imgID) {
            async function go() {
                const response = await apiFetch({
                    path: `/wp/v2/media/${props.attributes.imgID}`,
                    method: "GET"
                })
                props.setAttributes({imgURL: response.media_details.source_url})
            }
            go()
        }
    }, [props.attributes.imgID])

    function onFileSelect(x) {
        props.setAttributes({imgID: x.id})
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title="Background" initialOpen={true}>
                    <MediaUploadCheck>
                        <MediaUpload onSelect={onFileSelect} value={props.attributes.imgID} render={({ open }) => {
                            return <Button onClick={open}>Choose Image</Button>
                        }} />
                    </MediaUploadCheck>
                </PanelBody>
            </InspectorControls>
            <section>
                <div className="parallax reveal-on-load" style={{ backgroundImage: `url('${props.attributes.imgURL}')` }}></div>
                <div id="splash-message" className="splash-container reveal-on-load">
                    <InnerBlocks />
                </div>
            </section>
        </>
    )
}

function SaveComponent() {
    return <InnerBlocks.Content />
}
