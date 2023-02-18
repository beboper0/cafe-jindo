import { InnerBlocks } from "@wordpress/block-editor"

wp.blocks.registerBlockType("cafeblocktheme/swiper", {
    title: "Swiper",
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
            <div className="swiper-nav">
                <div className="nav-prev" role="button" aria-label="Previous slide">
                    <i className="fa-solid fa-arrow-left-long"></i>
                </div>
                <div className="swiper-nav-container">
                    <div className="nav-item">Drinks</div>
                    <div className="nav-item inactive">Food</div>
                </div>
                <div className="nav-next" role="button" aria-label="Next slide">
                    <i className="fa-solid fa-arrow-right-long"></i>
                </div>
            </div>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <InnerBlocks allowedBlocks={["cafeblocktheme/slide"]} />
                </div>
            </div>
        </>
    )
}

function SaveComponent() {
    return <InnerBlocks.Content />
}