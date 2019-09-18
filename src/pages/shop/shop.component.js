import React from "react";
import ShopData from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            collections: ShopData
        }
    }
    
    render(){
        return (
            <div className="shop-page">
             {this.state.collections.map(c => (
                <CollectionPreview key={c.id} {...c} />
             ))}
            </div>    
        )
    }
}

export default ShopPage;