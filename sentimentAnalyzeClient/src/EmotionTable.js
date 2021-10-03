import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
  render() {
    return (  
        <div>
          <table className="table table-bordered">
            <tbody>
                {
                Object.entries(this.props.emotions).map(function(mapentry) {
                  return <tr>
                            <tr>
                              <td>{mapentry[0]}</td>
                              <td>{mapentry[1]}</td>
                            </tr>
                          </tr>
                    })
                }  
            </tbody>
          </table>
          </div>
        );
      }
  
}
export default EmotionTable;