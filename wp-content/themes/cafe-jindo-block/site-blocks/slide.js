import { InnerBlocks } from "@wordpress/block-editor"

wp.blocks.registerBlockType("cafeblocktheme/slide", {
    title: "Slide",
    category: "design",
    supports: {
        align: ["full"]
    },
    attributes: {
        align: {type: "string", default: "full"}
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent() {
    return (
        <>
            <div className="swiper-slide">
                <InnerBlocks />
            </div>
        </>
    )
}

function SaveComponent() {
    return <InnerBlocks.Content />
}