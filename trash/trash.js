class Table {
    constructor(config) {
        this.config = config

    }

    build() {
        let table = "<table>" + this.columns() + this.row() + "</table>"
        return table
    }

    columns() {
        let col = '<tr>'
        this.config.columns.forEach( (el) => {
            col += `<th>${el}</th>`
        })
        col += '</tr>'
        return col
    }
    row() {
        let rows = ''
        this.config.rows.forEach( (arr) => {
            let row = '<tr>'
            arr.forEach( (el) => {
                row += `<td>${el}</td>`
            })
            row += '</tr>'
            rows += row
        })
        return rows

    }

}