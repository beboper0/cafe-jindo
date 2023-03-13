import { InnerBlocks, useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor"

wp.blocks.registerBlockType("cafeblocktheme/swipernav", {
    title: "Swiper Nav",
    category: "design",
    supports: {
        align: ["full"]
    },
    icon: 'layout',
    attributes: {
        align: {type: "string", default: "full"}
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent() {
    const BLOCKS_TEMPLATE = [
        [ 'cafeblocktheme/swipernavbutton', {} ],
        [ 'cafeblocktheme/swipernavbutton', {} ],
    ];
    const blockProps = useBlockProps( { className: 'swiper-nav-container' } );
    const innerBlocksProps = useInnerBlocksProps(
        blockProps, {allowedBlocks: ["cafeblocktheme/swipernavbutton"], template: BLOCKS_TEMPLATE }
    );

    return (
        <>
            <div className="swiper-nav">
                <div className="nav-prev" role="button" aria-label="Previous slide">
                    <i className="fa-solid fa-arrow-left-long"></i>
                </div>
                <div {...innerBlocksProps}></div>
                <div className="nav-next" role="button" aria-label="Next slide">
                    <i className="fa-solid fa-arrow-right-long"></i>
                </div>
            </div>
        </>
    )
}

function SaveComponent() {
    const blockProps = useBlockProps.save( { className: 'swiper-nav-container' } );
    const innerBlocksProps = useInnerBlocksProps.save( blockProps );

    return <div {...innerBlocksProps} />
}