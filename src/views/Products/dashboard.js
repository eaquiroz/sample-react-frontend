
import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import {Table} from '../../components';
import axios from 'axios'


class Products extends Component {

    state = {
        products: [],
        hiddenText:'disc-views',
        value: '',
        copied: false,
        columns: [{
            dataField: 'productId',
            text: 'Product Id',
            style: {
            },
            sort: true
        }, {
            dataField: 'productName',
            text: 'Product Name',
            sort: true,
            formatter: (cellContent, row) => {
                return (
                    <div className='table-content'>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: cellContent
                            }}></div>
                    </div>
                );
            }
        }, {
            dataField: 'shortDescription',
            text: 'Short Description',
            formatter: (cellContent, row) => {
                return (
                    <div className='table-content'>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: cellContent
                            }}></div>
                    </div>
                );
            }

        }, {
            dataField: 'longDescription',
            text: 'Long Description',
            formatter: (cellContent, row) => {
                return (
                    <div className='table-content'>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: cellContent
                            }}></div>
                    </div>
                );
            }
        },
            {
            dataField: 'price',
            text: 'Price'
        },  {
            dataField: 'reviewRating',
            text: 'Rating'
        },{
            dataField: 'inStock',
            text: 'Status'
        },
            {
                dataField: 'reviewCount',
                text: 'Count'
            }

        ],
    };

    getOrders = () => {
        axios.get('http://localhost:8080' +  '/api/v1/product/list', {
            headers: {
            }
        })
            .then((response) => {
                console.log(response)
                this.setState({products: response.data && response.data[0].products, inProgress:false})
            }, (error) => {
                this.setState({inProgress:false});
                console.log(error,"products error");
            });
    };

    componentDidMount() {
        this.setState({inProgress:true});
        this.getOrders();

        this.timer = setInterval(()=>{
            this.getOrders();
        },1000*6)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }


    render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
              <Table
                  columns={this.state.columns}
                  noDataIndication='No Products Found'
                  tableData={this.state.products}
              />

          </Row>
        </Grid>
      </div>
    );
  }
}

export default Products;
