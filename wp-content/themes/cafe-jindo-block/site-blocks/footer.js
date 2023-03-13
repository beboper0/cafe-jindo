import { InnerBlocks } from "@wordpress/block-editor"

wp.blocks.registerBlockType("cafeblocktheme/footer", {
    title: "Footer Container",
    category: "theme",
    supports: {
        align: ["full"]
    },
    icon: 'layout',
    attributes: {
        text: {type: "string"},
        align: {type: "string", default: "full"},
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent() {
    return (
        <>
            <footer id="colophon" className="site-footer">
                <div className="site-info">
                    <div className="container">
                        <InnerBlocks />
                    </div>
                    <div className="footer-bottom">
                        <p>© 2020 Cafe Jindo. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

function SaveComponent() {
    return <InnerBlocks.Content />
}
