import React from 'react';
import APILink from './APILink.js'

const Sidebar = props => {
  // let organizationConfig = props.organizationConfig
  let apiLinks = [];

  if (props.definitionList) {
    console.log("Props");
    console.log(props.definitionList);
    for (let i = 0; i < props.definitionList.apis.length; i++) {
            apiLinks.push(
                <APILink 
                    key={i}
                    apiLinkData={props.definitionList.apis[i]}
                    updateDefinitionLink={props.updateDefinitionLink}
                />
            )
    }
}

return (
  <div className="side-bar">
      <div className="side-bar-header">
          <h1>Moodys</h1>
      </div>
      <div className="side-bar-body">
          <h3>API DOCS</h3>
          {apiLinks}
      </div>
  </div>
)
}

export default Sidebar;