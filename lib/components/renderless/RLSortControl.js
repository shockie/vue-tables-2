export default {
    name: 'RLSortControl',
    inject: ['column','theme','sortable','sortableChevronClass'],
    render() {
        return this.$scopedSlots.default({
            sortable: this.sortable(this.column),
            class: `VueTables__sort-icon ${this.theme.right} ${this.sortableChevronClass(this.column)}`
        })
    }
}