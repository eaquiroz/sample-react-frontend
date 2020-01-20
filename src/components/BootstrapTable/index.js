import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

class CustomTable extends Component {
    constructor(props){
        super();

    }

    render() {
        const { SearchBar } = Search;
        const customTotal = (from, to, size) => (
            <span className="react-bootstrap-table-pagination-total">
            Showing { from } to { to } of { size } Results
        </span>
        );

        const options = {
            paginationSize: 5,
            pageStartIndex: 1,
            nextPageTitle: 'First page',
            prePageTitle: 'Pre page',
            firstPageTitle: 'Next page',
            lastPageTitle: 'Last page',
            showTotal: true,
            paginationTotalRenderer: customTotal,
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: this.props.tableData && this.props.tableData.length
            }]
        };

        return (
            <ToolkitProvider
                keyField="_id"
                data={ this.props.tableData ? this.props.tableData :[]}
                columns={ this.props.columns }
                search
            >
                {
                    props => (
                        <div>
                            <SearchBar  { ...props.searchProps } />
                            <BootstrapTable
                                striped
                                hover
                                condensed
                                noDataIndication={this.props.noDataIndication}
                                pagination={ paginationFactory(options) }
                                { ...props.baseProps }
                            >
                            </BootstrapTable>
                        </div>
                    )
                }
            </ToolkitProvider>
        );
    }
}

export default CustomTable ;
