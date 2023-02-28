import { InnerBlocks } from "@wordpress/block-editor"

wp.blocks.registerBlockType("cafeblocktheme/slide", {
    title: "Slide",
    category: "design",
    parent: [ "cafeblocktheme/swiper" ],
    supports: {
        align: ["full"]
    },
    attributes: {
        align: {type: "string", default: "full"}
    },
    edit: EditComponent,
    save: SaveComponent
})

const BLOCKS_TEMPLATE = [
    [ 'core/paragraph', { placeholder: 'Insert text or images here' } ],
];

function EditComponent() {
    return (
        <>
            <div className="swiper-slide">
                <InnerBlocks
                    renderAppender={ InnerBlocks.ButtonBlockAppender }
                />
            </div>
        </>
    )
}

function SaveComponent() {
    return <InnerBlocks.Content />
}