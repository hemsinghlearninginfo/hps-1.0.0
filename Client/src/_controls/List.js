import React, { Component } from 'react';
import moment from 'moment';
import { Icon, InlineLoader, ModalPopUpButton } from '_controls';
import { Action, commonMethods } from '_helpers';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            sortKey: '',
            order: 'asc'
        }
        this.handleChange = this.handleChange.bind(this);
        this.setSortKey = this.setSortKey.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    setSortKey(key) {
        const { sortKey, order } = this.state;
        const newOrder = (sortKey === key) ? (order === 'asc' ? 'desc' : 'asc') : 'asc';
        this.setState({ sortKey: key, order: newOrder });
    }

    compareBy(key) {
        const { order } = this.state;
        return function (a, b) {
            if (order === 'asc') {
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
            }
            else {
                if (a[key] > b[key]) return -1;
                if (a[key] < b[key]) return 1;
            }
            return 0;
        };
    }

    render() {
        const { data, heading, actionItem, config } = this.props;
        const { searchText, sortKey, order } = this.state;

        let headingForTable = heading ? ['action|Action', ...heading] : heading;
        let dataFromObject = sortKey !== '' ? data.items.sort(this.compareBy(sortKey)) : data.items;

        if (searchText !== '' && dataFromObject) {
            let searchValue = searchText.toLowerCase();
            dataFromObject = dataFromObject.filter((item) => {
                return Object.keys(item).some(key => item[key].toString().toLowerCase().search(searchValue) !== -1);
            });
            dataFromObject["action"] = '';
        }

        const headingRow = data.items && headingForTable.map((item, index) => {
            return item.split('|')[0] === 'action' ? <th key={index}>Action</th> : <th className="pointer" key={index}
                onClick={() => { this.setSortKey(item.includes('|') ? item.split('|')[0] : item) }}>
                {sortKey === (item.includes('|') ? item.split('|')[0] : item) ? <Icon type={order} /> : ' '}{(item.includes('|') ? item.split('|')[1] : item)}
            </th>;
        });

        let dataRecordValue = '';
        let dataRow = dataFromObject && dataFromObject.map((item) => {
            return <tr key={item.id}>{
                headingForTable.map((itemHeading, index) => {
                    dataRecordValue = item[itemHeading.split('|')[0]];
                    if(config && config.removeTime){
                        let removeTimeFields = config.removeTimeFields.includes('|')? config.removeTimeFields.split('|') : config.removeTimeFields;
                        if(removeTimeFields === itemHeading.split('|')[0]){
                            dataRecordValue = moment(dataRecordValue.split('T')[0]).format('DD-MM-YYYY');
                        }
                    }
                    return itemHeading.split('|')[0] === 'action' ? <td key={index}>
                        <ModalPopUpButton buttonType='warning' action={() => actionItem(Action.Edit, item.id)}><Icon type="edit" /></ModalPopUpButton>{' '}
                        <ModalPopUpButton modalPopUp='#modalPopUpConfirm' buttonType='danger' action={() => actionItem(Action.Delete, item.id)}><Icon type="delete" /></ModalPopUpButton>
                    </td> :
                        <td key={index}>{commonMethods.isEmpty(dataRecordValue) ? dataRecordValue.toString() : ''}</td>;
                })}
            </tr>
        });
        if (dataRow && dataRow.length === 0) {
            dataRow = <tr><td className="justify-content-center" colSpan={headingForTable.length}>Not data found...</td></tr>
        }

        return (
            <>
                <section>
                    {data && data.loading && <InlineLoader message="Loading..." />}
                    {data && data.items &&
                        <>
                            <div className="form-row align-items-center">
                                <div className="col-auto w-100">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Search</div>
                                        </div>
                                        <input autoFocus type="text" className="form-control" id="searchText" name="searchText"
                                            value={searchText} onChange={this.handleChange}
                                            placeholder="Search by text..." />
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr className="bg-info text-white">
                                            {headingRow}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataRow}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    }
                </section>
            </>
        );
    }
}
export { List }; 