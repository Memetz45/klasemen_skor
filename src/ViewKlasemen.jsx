import React from "react";
import "./ViewKlasemen.css"

const ViewKlasemen = () => {
    return (
        <div className="view">
            <h1>Klasemen Sementara</h1>
                <table className="klasemen">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Klub</th>
                            <th>Ma</th>
                            <th>Me</th>
                            <th>S</th>
                            <th>K</th>
                            <th>GM</th>
                            <th>GK</th>
                            <th>Point</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Persib</td>
                            <td>2</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>4</td>
                            <td>0</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Persib</td>
                            <td>2</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>4</td>
                            <td>0</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Persib</td>
                            <td>2</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>4</td>
                            <td>0</td>
                            <td>6</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default ViewKlasemen;