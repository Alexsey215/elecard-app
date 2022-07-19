import { useState } from 'react';
import { useSelector } from 'react-redux';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import {convertDate} from '../utils/convertDate.js'
import Card from 'react-bootstrap/Card';

export const MyTreeView = () => {

    const { data } = useSelector(state => state.dataReducer);
    
    const animals = data.filter((node)=> node.category === "animals")
    const business = data.filter((node)=> node.category === "business")
    const food = data.filter((node)=> node.category === "food")
    const health = data.filter((node)=> node.category === "health")
    const places = data.filter((node)=> node.category === "places")
    const science = data.filter((node)=> node.category === "science")
    const vehicle = data.filter((node)=> node.category === "vehicle")
    const winter = data.filter((node)=> node.category === "winter")

    const [photoWidth, setPhotoWidth] = useState("100px");

    const [newData, setNewData] = useState(
        [
            {
                id: 1,
                name: "Tree List",
                children: [
                    {
                        id: 2, 
                        name: "animals",  
                        children: animals
                    },
                    {
                        id: 3, 
                        name: "business",
                        children: business
                    },
                    {
                        id: 4, 
                        name: "food",
                        children: food
                    },
                    {
                        id: 5, 
                        name: "health",
                        children: health
                    },
                    {
                        id: 6, 
                        name: "places",
                        children: places
                    },
                    {
                        id: 7, 
                        name: "science",
                        children: science
                    },
                    {
                        id: 8, 
                        name: "vehicle",
                        children: vehicle
                    },
                    {
                        id: 9, 
                        name: "winter",
                        children: winter
                    }
                ]
            }
        ]
    )
    
    const photoWidthHandler = () => {
        photoWidth === "600px" ? setPhotoWidth("100px") : setPhotoWidth("600px")
    }
    

    return (
        <div className="d-flex flex-column align-items-center">
            <h1>Tree view</h1>          
                {newData && 
                    <TreeView  
                        aria-label="multi-select"
                        multiSelect
                        sx={{ height: 740, flexGrow: 1, width: 800, overflowY: 'auto' }}
                    >
                        <TreeItem nodeId={`${newData[0].id}`} label={newData[0].name}>
                            {newData[0].children.map((node, idx) => 
                                <TreeItem key={idx} nodeId={`${node.id}`} label={node.name}>
                                    {node.children.map((item) => 
                                        <TreeItem 
                                            key={item.timestamp} 
                                            nodeId={`${item.timestamp}`} 
                                            label={`Category: ${item.category}; Filesize: ${item.filesize}; Date: ${convertDate(item.timestamp)}`}                                     
                                        >
                                            <Card.Img 
                                                src={`http://contest.elecard.ru/frontend_data/${item.image}`} 
                                                alt={`image from ${item.category} category`} 
                                                className="img-thumbnail" 
                                                style={{width: photoWidth}}
                                                onClick={()=> photoWidthHandler()}
                                            />
                                        </TreeItem>  
                                    )}
                                </TreeItem>  
                            )}
                        </TreeItem>
                    </TreeView>
                }
        </div>
    )
}




    