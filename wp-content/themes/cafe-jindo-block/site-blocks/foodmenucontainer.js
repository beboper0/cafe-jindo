import { InnerBlocks } from "@wordpress/block-editor"

wp.blocks.registerBlockType("cafeblocktheme/foodmenucontainer", {
    title: "Food Menu Container",
    category: "design",
    supports: {
        align: ["full"]
    },
    attributes: {
        align: {type: "string", default: "full"},
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent() {
    return (
        <>
            <div className="food-menu-section">
                <InnerBlocks />
            </div>
        </>
    )
}

function SaveComponent() {
    return <InnerBlocks.Content />
}