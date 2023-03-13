import { InnerBlocks } from "@wordpress/block-editor"

wp.blocks.registerBlockType("cafeblocktheme/swiper", {
    title: "Swiper",
    category: "design",
    supports: {
        align: ["full"]
    },
    icon: 'slides',
    attributes: {
        align: {type: "string", default: "full"}
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent() {
    const BLOCKS_TEMPLATE = [
        [ 'cafeblocktheme/slide', {} ],
        [ 'cafeblocktheme/slide', {} ],
    ];

    return (
        <>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <InnerBlocks allowedBlocks={["cafeblocktheme/slide"]} template={ BLOCKS_TEMPLATE }/>
                </div>
            </div>
        </>
    )
}

function SaveComponent() {
    return <InnerBlocks.Content />
}