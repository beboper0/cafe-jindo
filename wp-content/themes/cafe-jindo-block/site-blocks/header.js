wp.blocks.registerBlockType("cafeblocktheme/header", {
    title: "Cafe Jindo Header",
    category: "theme",
    attributes: {
        align: {type: "string", default: "full"},
    },
    edit: function() {
        return wp.element.createElement("div", {className: "cafe-placeholder-block"}, "Header Placeholder")
    },
    save: function () {
        return null
    }
})