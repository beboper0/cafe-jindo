import { InnerBlocks } from "@wordpress/block-editor"

wp.blocks.registerBlockType("cafeblocktheme/mainsection", {
    title: "Main Page Section Container",
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
            <section className="no-parallax">
                <div className="container reveal-on-scroll">
                    <InnerBlocks />
                </div>
            </section>
        </>
    )
}

function SaveComponent() {
    return <InnerBlocks.Content />
}