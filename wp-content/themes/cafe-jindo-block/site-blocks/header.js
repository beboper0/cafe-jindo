import { InnerBlocks, useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor"

wp.blocks.registerBlockType("cafeblocktheme/header", {
    title: "Header Container",
    category: "theme",
    attributes: {
        align: {type: "string", default: "full"},
    },
    icon: 'layout',
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent() {
    const BLOCKS_TEMPLATE = [
        [ 'cafeblocktheme/cafelogo', {} ],
        [ 'cafeblocktheme/cafenav', {} ],
    ];

    const blockProps = useBlockProps( { className: 'container' } );
    const innerBlocksProps = useInnerBlocksProps(
        blockProps, {allowedBlocks: ['cafeblocktheme/cafelogo', 'cafeblocktheme/cafenav', 'cafeblocktheme/mainbutton'], template: BLOCKS_TEMPLATE }
    );

    return (
        <>
            <header id="masthead" className="site-header site-header site-header__white">
                <div {...innerBlocksProps}></div>
            </header>
        </>
    )
}

function SaveComponent() {
    const blockProps = useBlockProps.save( { className: 'container' } );
    const innerBlocksProps = useInnerBlocksProps.save( blockProps );

    return <div {...innerBlocksProps} />
}