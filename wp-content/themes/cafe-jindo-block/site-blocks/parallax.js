import { InnerBlocks } from "@wordpress/block-editor"

wp.blocks.registerBlockType("cafeblocktheme/parallax", {
    title: "Parallax Container",
    category: "design",
    supports: {
        align: ["full"]
    },
    icon: 'button',
    attributes: {
        align: {type: "string", default: "full"},
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent() {
    return (
        <>
            <div className="parallax-container">
                <main id="primary" className="site-main">
                    <InnerBlocks />
                </main>
            </div>
        </>
    )
}

function SaveComponent() {
    return <InnerBlocks.Content />
}