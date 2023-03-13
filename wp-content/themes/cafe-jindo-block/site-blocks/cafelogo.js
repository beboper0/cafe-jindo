import { InnerBlocks } from "@wordpress/block-editor"

wp.blocks.registerBlockType("cafeblocktheme/cafelogo", {
    title: "Cafe Logo",
    category: "design",
    supports: {
        align: ["full"]
    },
    icon: 'format-image',
    attributes: {
        align: {type: "string", default: "full"},
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent() {
    const BLOCKS_TEMPLATE = [
        [ 'core/site-logo', {} ],
    ];

    return (
        <>
            <div className="site-branding">
                <InnerBlocks allowedBlocks={["core/site-logo"]} template={ BLOCKS_TEMPLATE }/>
            </div>
        </>
    )
}

function SaveComponent() {
    return <InnerBlocks.Content />
}