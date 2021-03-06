export default {
    name: 'RLChildRowToggler',
    props: ['rowId'],
    inject: ['toggleChildRow', 'childRowTogglerClass', 'componentsOverride'],
    render(h) {
        return this.$scopedSlots.default({
            class: this.childRowTogglerClass.bind(this, this.rowId),
            toggle: this.toggleChildRow.bind(this, this.rowId),
            override: this.componentsOverride.childRowToggler
        })
    }
}




