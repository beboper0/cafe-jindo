import { InnerBlocks, useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor"

wp.blocks.registerBlockType("cafeblocktheme/cafenav", {
    title: "Cafe Navigation",
    category: "design",
    supports: {
        align: ["full"]
    },
    icon: 'layout',
    attributes: {
        align: {type: "string", default: "full"},
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent() {
    const blockProps = useBlockProps( { className: 'main-navigation__menu-container' } );
    const innerBlocksProps1 = useInnerBlocksProps(
        blockProps, {allowedBlocks: ["core/navigation"], template: [ 'core/navigation', {} ] }
    );

    return (
        <>
            <nav id="site-navigation" className="main-navigation">
                <div {...innerBlocksProps1}></div>
            </nav>
        </>
    )
}

function SaveComponent() {
    const blockProps = useBlockProps.save( { className: 'main-navigation__menu-container' } );
    const innerBlocksProps = useInnerBlocksProps.save( blockProps );

    return <div {...innerBlocksProps} />
}