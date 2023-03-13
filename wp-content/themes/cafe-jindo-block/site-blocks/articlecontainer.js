import { InnerBlocks } from "@wordpress/block-editor"

wp.blocks.registerBlockType("cafeblocktheme/articlecontainer", {
    title: "Article Page Container",
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
    return (
        <>
            <div className="article-content">
                <div className="container">
                    <InnerBlocks />
                </div>
            </div>
        </>
    )
}

function SaveComponent() {
    return <InnerBlocks.Content />
}