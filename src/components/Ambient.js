import React from 'react';

function Ambient() {
    return (
        <div>
            <br/>
            <h2 className='flex justify-center font-semibold border-b border-gray-200 text-sky-600 text-3xl'>TCG</h2>
            <br />            
            <div className="flex flex-wrap mb-2">
                <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
                    <div className="border border-gray-300 bg-gray-100 rounded shadow p-2">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pl-1 pr-4"><i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                            <div className="flex-1 text-right">
                                <h3>Store Count</h3>
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td>Forecast:</td>
                                            <td className="text-black-400">5</td>
                                        </tr>
                                        <tr>
                                            <td>Actual:</td>
                                            <td className="text-green-400">7</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2">
                    <div className="border border-purple-300 bg-purple-100 rounded shadow p-2">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pl-1 pr-4"><i className="fas fa-users fa-2x fa-fw fa-inverse"></i></div>
                            <div className="flex-1 text-right">
                                <h3>Forecast Vs Actual</h3>
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Equal:</td>
                                            <td className="text-blue-400">4</td>
                                        </tr>
                                        <tr>
                                            <td>Greater than:</td>
                                            <td className="text-green-400">2</td>
                                        </tr>
                                        <tr>
                                            <td>Less than:</td>
                                            <td className="text-red-400">1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pr-3 xl:pl-1">
                    <div className="border border-orange-300 bg-orange-100 rounded shadow p-2">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pl-1 pr-4"><i className="fas fa-user-plus fa-2x fa-fw fa-inverse"></i></div>
                            <div className="flex-1 text-right pr-1">
                                <h3>OBD dropped</h3>
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>%STO:</td>
                                            <td className="text-sky-400">100</td>
                                        </tr>
                                        <tr>
                                            <td>%OBD:</td>
                                            <td className="text-sky-400">100</td>
                                        </tr>
                                        <tr>
                                            <td>Last OBD Dropped to MH:</td>
                                            <td className="text-sky-400">5:30 AM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <h2 className='flex justify-center font-semibold border-b border-gray-200 text-sky-600 text-3xl'>Franchise</h2>
            <br />            
            <div className="flex flex-wrap mb-2">
                <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
                    <div className="border border-gray-300 bg-gray-100 rounded shadow p-2">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pl-1 pr-4"><i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                            <div className="flex-1 text-right">
                                <h3>Store Count</h3>
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td>Forecast:</td>
                                            <td className="text-black-400">5</td>
                                        </tr>
                                        <tr>
                                            <td>Actual:</td>
                                            <td className="text-green-400">7</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2">
                    <div className="border border-purple-300 bg-purple-100 rounded shadow p-2">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pl-1 pr-4"><i className="fas fa-users fa-2x fa-fw fa-inverse"></i></div>
                            <div className="flex-1 text-right">
                                <h3>Forecast Vs Actual</h3>
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Equal:</td>
                                            <td className="text-blue-400">4</td>
                                        </tr>
                                        <tr>
                                            <td>Greater than:</td>
                                            <td className="text-green-400">2</td>
                                        </tr>
                                        <tr>
                                            <td>Less than:</td>
                                            <td className="text-red-400">1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pr-3 xl:pl-1">
                    <div className="border border-orange-300 bg-orange-100 rounded shadow p-2">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pl-1 pr-4"><i className="fas fa-user-plus fa-2x fa-fw fa-inverse"></i></div>
                            <div className="flex-1 text-right pr-1">
                                <h3>OBD dropped</h3>
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>%STO:</td>
                                            <td className="text-sky-400">100</td>
                                        </tr>
                                        <tr>
                                            <td>%OBD:</td>
                                            <td className="text-sky-400">100</td>
                                        </tr>
                                        <tr>
                                            <td>Last OBD Dropped to MH:</td>
                                            <td className="text-sky-400">5:30 AM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <h2 className='flex justify-center font-semibold border-b border-gray-200 text-sky-600 text-3xl'>FRTS</h2>
            <br />            
            <div className="flex flex-wrap mb-2">
                <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
                    <div className="border border-gray-300 bg-gray-100 rounded shadow p-2">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pl-1 pr-4"><i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                            <div className="flex-1 text-right">
                                <h3>Store Count</h3>
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td>Forecast:</td>
                                            <td className="text-black-400">5</td>
                                        </tr>
                                        <tr>
                                            <td>Actual:</td>
                                            <td className="text-green-400">7</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pr-3 xl:pl-1">
                    <div className="border border-orange-300 bg-orange-100 rounded shadow p-2">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pl-1 pr-4"><i className="fas fa-user-plus fa-2x fa-fw fa-inverse"></i></div>
                            <div className="flex-1 text-right pr-1">
                                <h3>OBD dropped</h3>
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>%STO:</td>
                                            <td className="text-sky-400">100</td>
                                        </tr>
                                        <tr>
                                            <td>%OBD:</td>
                                            <td className="text-sky-400">100</td>
                                        </tr>
                                        <tr>
                                            <td>Last OBD Dropped to MH:</td>
                                            <td className="text-sky-400">5:30 AM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ambient;
