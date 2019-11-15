// import React, { Component } from 'react';
// //import { connect } from 'react-redux';
// import { InlineLoader } from '_controls';
// import { Icon } from '_controls';


// // import { Role, commonMethods } from '_helpers';

// class MarketList extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             searchText: '',
//             sortKey: '',
//             order: 'asc'
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.setSortKey = this.setSortKey.bind(this);
//     }

//     handleChange(e) {
//         const { name, value } = e.target;
//         this.setState({ [name]: value });
//     }

//     setSortKey(key) {
//         const { sortKey, order } = this.state;
//         const newOrder = (sortKey === key) ? (order === 'asc' ? 'desc' : 'asc') : 'asc';
//         this.setState({ sortKey: key, order: newOrder });
//     }

//     compareBy(key) {
//         const { order } = this.state;
//         return function (a, b) {
//             if (order === 'asc') {
//                 if (a[key] < b[key]) return -1;
//                 if (a[key] > b[key]) return 1;
//             }
//             else {
//                 if (a[key] > b[key]) return -1;
//                 if (a[key] < b[key]) return 1;
//             }
//             return 0;
//         };
//     }

//     render() {
//         const { data, heading } = this.props;
//         const { searchText, sortKey, order } = this.state;

//         let headingForTable = heading ? ['action|Action', ...heading] : heading;
//         let dataFromObject = sortKey !== '' ? data.items.sort(this.compareBy(sortKey)) : data.items;

//         if (searchText !== '' && dataFromObject) {
//             let searchValue = searchText.toLowerCase();
//             dataFromObject = dataFromObject.filter((item) => {
//                 return Object.keys(item).some(key => item[key].toString().toLowerCase().search(searchValue) !== -1);
//             });
//             dataFromObject["action"] = '';
//         }

//         const headingRow = data.items && headingForTable.map((item, index) => {
//             return item.split('|')[0] === 'action' ? <th key={index}>Action</th> : <th className="pointer" key={index}
//                 onClick={() => { this.setSortKey(item.split('|')[0]) }}>
//                 {sortKey === item.split('|')[0] ? <Icon type={order} /> : ' '}{item.split('|')[1]}
//             </th>;
//         });

//         const dataRow = dataFromObject && dataFromObject.map((item) => {
//             return <tr key={item.id}>{
//                 headingForTable.map((itemHeading, index) => {
//                     return itemHeading.split('|')[0] === 'action' ? <td key={index}>
//                         <button className="btn btn-sm btn-warning"><Icon type="edit" /></button>{' '}
//                         <button className="btn btn-sm btn-danger"><Icon type="delete" /></button>
//                     </td> :
//                     <td key={index}>{item[itemHeading.split('|')[0]] !== undefined ? item[itemHeading.split('|')[0]].toString() : ''}</td>;
//                 })}
//             </tr>
//         });

//         return (
//             <>
//                 <section>
//                     {data && data.loading && <InlineLoader message="Loading..." />}
//                     {data && data.items &&
//                         <>
//                             <div className="form-row align-items-center">
//                                 <div className="col-auto w-100">
//                                     <div className="input-group">
//                                         <div className="input-group-prepend">
//                                             <div className="input-group-text">Search</div>
//                                         </div>
//                                         <input autoFocus type="text" className="form-control" id="searchText" name="searchText"
//                                             value={searchText} onChange={this.handleChange}
//                                             placeholder="Search by text..." />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="table-responsive">
//                                 <table className="table table-striped">
//                                     <thead>
//                                         <tr className="bg-info text-white">
//                                             {headingRow}
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {dataRow}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </>
//                     }
//                 </section>
//             </>
//         );
//     }
// }

// // function mapStateToProps(state) {
// //     const { market } = state;
// //     const { loggingIn } = state.authentication;
// //     return {
// //         loggingIn,
// //         market,
// //     };
// // }

// // const connectedMarketList = connect(mapStateToProps)(MarketList);
// // export { connectedMarketList as MarketList }; 
// export { MarketList }; 