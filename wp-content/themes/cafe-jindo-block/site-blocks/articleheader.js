import apiFetch from "@wordpress/api-fetch"
import { Button, PanelBody, PanelRow, FocalPointPicker } from "@wordpress/components"
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import {useEffect, useState} from "@wordpress/element"

wp.blocks.registerBlockType("cafeblocktheme/articleheader", {
    title: "Article Header",
    category: "design",
    supports: {
        align: ["full"]
    },
    attributes: {
        align: {type: "string", default: "full"},
        imgID: {type: "number"},
        imgURL: {type: "string", default: articleheader.fallbackimage},
        imgFocalPoint: {type: "object", default: {x: 0.5, y: 0.5}}
    },
    edit: EditComponent,
    save: SaveComponent
})

const BLOCKS_TEMPLATE = [
    [ 'core/heading', { level: '1' } ],
];

function EditComponent(props) {
    useEffect(function() {
        if (props.attributes.imgID) {
            async function go() {
                const response = await apiFetch({
                    path: `/wp/v2/media/${props.attributes.imgID}`,
                    method: "GET"
                })
                props.setAttributes({imgURL: response.media_details.sizes.full.source_url})
            }
            go()
        }
    }, [props.attributes.imgID])

    function onFileSelect(x) {
        props.setAttributes({imgID: x.id})
    }

    const [ focalPoint, setFocalPoint ] = useState(props.attributes.imgFocalPoint);

    return (
        <>
            <InspectorControls>
                <PanelBody title="Background" initialOpen={true}>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload onSelect={onFileSelect} value={props.attributes.imgID} render={({ open }) => {
                                return <Button onClick={open}>Choose Image</Button>
                            }} />
                        </MediaUploadCheck>
                    </PanelRow>
                    <PanelRow>
                        <FocalPointPicker
                            url= { props.attributes.imgURL }
                            value={ focalPoint }
                            onDragStart={ setFocalPoint }
                            onDrag={ setFocalPoint }
                            onChange={ setFocalPoint }
                            onDragEnd={props.setAttributes({imgFocalPoint: focalPoint})}
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <header className="article-header" style={{ backgroundImage: `url('${props.attributes.imgURL}')`, backgroundPosition: `${ props.attributes.imgFocalPoint.x * 100 }% ${ props.attributes.imgFocalPoint.y * 100 }%` }}>
                <InnerBlocks template={ BLOCKS_TEMPLATE } allowedBlocks={['core/heading']}/>
            </header>
        </>
    )
}

function SaveComponent() {
    return <InnerBlocks.Content />
}

